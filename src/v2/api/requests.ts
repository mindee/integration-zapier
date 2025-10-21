import { Bundle, HttpResponse, ZObject } from "zapier-platform-core";
import { MINDEE_V2_BASE_URL } from "../../constants.js";
import { setTimeout } from "node:timers/promises";
import FormData from "form-data";

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
    url: `${MINDEE_V2_BASE_URL}/v2/jobs/${jobId}`,
  });
}

/**
 * Send a file to the asynchronous processing queue for an inference.
 * @param z Zapier SDK.
 * @param bundle The body of the request.
 * @returns A promise that resolves to the response from the server.
 */
export async function reqInferencePost(
  z: ZObject,
  bundle: any,
): Promise<HttpResponse> {
  return await z.request({
    method: "POST",
    url: `${MINDEE_V2_BASE_URL}/v2/inferences/enqueue`,
    body: setupEnqueueForm(bundle),
  });
}

/**
 * Get a list of available models.
 * @param z Zapier SDK.
 * @param name The name of the model to search for.
 * @param page The page number to retrieve.
 * @param perPage The number of models per page.
 * @returns A promise that resolves to the response from the server.
 */
export async function reqSearchModelsGet(
  z: ZObject,
  name: string,
  page: number,
  perPage: number,
): Promise<HttpResponse> {
  return await z.request({
    method: "GET",
    url: `${MINDEE_V2_BASE_URL}/v2/search/models`,
    // eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
    params: { name: name, page: page, per_page: perPage },
  });
}

/**
 * Sets up the body for the enqueue & enqueueAndGetInference operation.
 * @param bundle Zapier bundle
 * @returns The body for the enqueue & enqueueAndGetInference operation.
 */
export function setupEnqueueForm(bundle: Bundle): FormData {
  const form = new FormData();

  form.append("model_id", bundle.inputData.modelId);

  const fileData: any = bundle.inputData.file;

  // zapier can send the data in various ways
  if (!fileData) {
    throw new Error("No file provided");
  }
  if (typeof fileData === "object" && fileData.url) {
    form.append("url", fileData.url);
  } else if (typeof fileData === "string") {
    if (fileData.startsWith("http")) {
      form.append("url", fileData);
    } else {
      form.append("file_base64", fileData);
    }
  } else {
    form.append("file", fileData);
  }

  if (bundle.inputData["confidence"] && bundle.inputData["confidence"] !== "default") {
    form.append("confidence", bundle.inputData.confidence);
  }
  if (bundle.inputData.polygon && bundle.inputData.polygon !== "default") {
    form.append("polygon", bundle.inputData.polygon);
  }
  if (bundle.inputData.rag && bundle.inputData.rag !== "default") {
    form.append("rag", bundle.inputData.rag);
  }
  if (bundle.inputData.rawText && bundle.inputData.rawText !== "default") {
    form.append("raw_text", bundle.inputData.rawText);
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
