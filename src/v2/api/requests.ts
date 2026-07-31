import { Bundle, HttpResponse, ZObject } from "zapier-platform-core";
import { MINDEE_V2_BASE_URL } from "../../constants.js";
import { setTimeout } from "node:timers/promises";
import FormData from "form-data";

export type ModelType = "classification" | "crop" | "split" | "ocr";
const utilityTypes: Set<string> = new Set(["classification", "crop", "split", "ocr"]);
const modelSelectionSeparator = "::";

/**
 * Parse a model selection value coming from the dynamic dropdown.
 * Supports legacy values where only model ID is present.
 */
export function parseModelSelection(selection: string): { modelId: string, utilityType?: ModelType } {
  const [modelId = "", rawProduct = ""] = selection.split(modelSelectionSeparator);
  const product = (rawProduct || "").toLowerCase();

  if (utilityTypes.has(product)) {
    return { modelId, utilityType: product as ModelType };
  }

  return { modelId };
}

/**
 * Get the status of an inference that was previously enqueued.
 * @param z Zapier SDK.
 * @param jobId The ID of the job to poll.
 * @returns A promise that resolves to the response from the server.
 */
export async function reqJobGet(
  z: ZObject, jobId: string
): Promise<HttpResponse> {
  return await z.request({
    url: `${MINDEE_V2_BASE_URL}/v2/jobs/${jobId}?redirect=true`,
  });
}

/**
 * Send a file to the asynchronous processing queue for an utility inference.
 * @param z Zapier SDK.
 * @param utilityName The name of the utility to use.
 * @param bundle The body of the request.
 * @returns A promise that resolves to the response from the server.
 */
export async function reqPost(
  z: ZObject,
  utilityName: string,
  bundle: any,
): Promise<HttpResponse> {
  const selectedModel = parseModelSelection(bundle.inputData.modelId as string);
  const utilityTypeFromInput = typeof bundle.inputData.utilityType === "string"
    ? bundle.inputData.utilityType.toLowerCase()
    : undefined;
  const inferredUtilityType = utilityTypeFromInput || selectedModel.utilityType;
  const productName = utilityName === "extraction" && inferredUtilityType
    ? inferredUtilityType
    : utilityName;

  let body;
  if (productName === "extraction") {
    body = setupExtractionParamsForm(bundle);
  } else {
    body = setupUtilityParamsForm(bundle);
  }
  return await z.request({
    method: "POST",
    url: `${MINDEE_V2_BASE_URL}/v2/products/${productName}/enqueue`,
    body: body,
  });
}

/**
 * Get a list of available models.
 * @param z Zapier SDK.
 * @param name The name of the model to search for.
 * @param page The page number to retrieve.
 * @param perPage The number of models per page.
 * @param modelType Type of model.
 * @returns A promise that resolves to the response from the server.
 */
export async function reqSearchModelsGet(
  z: ZObject,
  name: string,
  page: number,
  perPage: number,
  modelType?: string,
): Promise<HttpResponse> {
  const apiParams: Record<string, string | number> = {
    page,
  };
  apiParams["per_page"] = perPage;

  if (name && name.trim().length > 0) {
    apiParams["name"] = name;
  }

  if (modelType) {
    apiParams["model_type"] = modelType;
  }

  return await z.request({
    method: "GET",
    url: `${MINDEE_V2_BASE_URL}/v2/search/models`,
    params: apiParams,
  });
}

/**
 * Sets up the base form data with common fields (model_id and file).
 * @param bundle Zapier bundle
 * @returns A populated FormData instance.
 */
function setupBaseParamsForm(bundle: Bundle): FormData {
  const form = new FormData();

  const selectedModel = parseModelSelection(bundle.inputData.modelId as string);
  form.append("model_id", selectedModel.modelId);

  const fileData: any = bundle.inputData.file;

  if (!fileData) {
    throw new Error("No file provided");
  }

  if (typeof fileData === "object" && fileData.url) {
    form.append("url", fileData.url);
  } else if (typeof fileData === "string") {
    form.append(fileData.startsWith("http") ? "url" : "file_base64", fileData);
  } else {
    form.append("file", fileData);
  }

  return form;
}

/**
 * Sets up the body for the enqueue & enqueueAndGetInference operation for utilities.
 * @param bundle Zapier bundle
 * @returns The body for the enqueue & enqueueAndGetInference operation.
 */
export function setupUtilityParamsForm(bundle: Bundle): FormData {
  return setupBaseParamsForm(bundle);
}

/**
 * Sets up the body for the enqueue & enqueueAndGetInference operation.
 * @param bundle Zapier bundle
 * @returns The body for the enqueue & enqueueAndGetInference operation.
 */
export function setupExtractionParamsForm(bundle: Bundle): FormData {
  const form = setupBaseParamsForm(bundle);
  const { confidence, polygon, rag, rawText } = bundle.inputData;

  const optionalFields = [
    { key: "confidence", value: confidence },
    { key: "polygon", value: polygon },
    { key: "rag", value: rag },
    { key: "raw_text", value: rawText },
  ];

  // Append any optional fields that are provided and not set to "default"
  for (const { key, value } of optionalFields) {
    if (value && value !== "default") {
      form.append(key, value);
    }
  }

  return form;
}

/**
 * Polls the server for an inference that was previously enqueued.
 * @param z Zapier SDK.
 * @param jobId The ID of the job/inference to poll.
 * @param maxPollingTimeOut The maximum polling timeout in seconds.
 * @returns A promise that resolves to the inference results, containing the result.
 */
export async function pollForInference(
  z: ZObject,
  jobId: string,
  maxPollingTimeOut: number = 180
): Promise<HttpResponse> {
  let response = await reqJobGet(z, jobId);
  if (response.data.inference) {
    return response.data;
  }
  if (!response.data.job) {
    throw new Error("Job not found");
  }
  let jobStatus: string = response.data.status as string;

  // initial delay before polling
  await setTimeout(2500);

  for (let i = 0; i < maxPollingTimeOut; i++) {
    if (
      response.data.status ||
      response.data.detail ||
      response.data?.job.error ||
      jobStatus === "Failed"
    ) {
      throw new Error("Processing failed.");
    }

    // polling delay must be one second, since we define maxPollingTimeOut in seconds
    await setTimeout(1000);

    response = await reqJobGet(z, jobId);
    if ("inference" in (response.data)) break;

    if (!("job" in response.data))
      throw new Error("The Mindee API replied with an unexpected reply.");
    jobStatus = response.data.job.status as string;
  }
  return response;
}
