import { HttpResponse, ZObject } from "zapier-platform-core";
import { MINDEE_V2_BASE_URL } from "../../constants.js";
import { setTimeout } from "node:timers/promises";

/**
 * Get the status of an inference that was previously enqueued.
 * @param z Zapier SDK.
 * @param jobId The ID of the job to poll.
 * @returns A promise that resolves to the response from the server.
 */
export async function reqJobGet(z: ZObject, jobId: string): Promise<HttpResponse> {
  return await z.request({
    url: `${MINDEE_V2_BASE_URL}/v2/jobs/${jobId}`,
  });
}

/**
 * Get the result of an inference that was previously enqueued.
 * @param z Zapier SDK.
 * @param inferenceId The ID of the inference to poll.
 * @returns A promise that resolves to the response from the server.
 */
export async function reqInferenceGet(z: ZObject, inferenceId: string): Promise<HttpResponse> {
  return await z.request({
    url: `${MINDEE_V2_BASE_URL}/v2/inferences/${inferenceId}`,
  });
}

/**
 * Send a file to the asynchronous processing queue for an inference.
 * @param z Zapier SDK.
 * @param body The body of the request.
 * @returns A promise that resolves to the response from the server.
 */
export async function reqInferencePost(z: ZObject, body: any): Promise<HttpResponse> {
  return await z.request({
    method: "POST",
    url: `${MINDEE_V2_BASE_URL}/v2/inferences/enqueue`,
    form: body,
  });
}

/**
 * Sets up the body for the enqueue & enqueueAndGetInference operation.
 * @param bundle Zapier bundle
 * @returns The body for the enqueue & enqueueAndGetInference operation.
 */
export function setupEnqueueBody(bundle: any): Record<string, any> {
  const body: Record<string, any> = {
    // eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
    model_id: bundle.inputData.modelId,
    file: bundle.inputData.file
  };
  body.file = bundle.inputData.file;
  if (bundle.inputData.alias && bundle.inputData.alias.length > 0) {
    body.alias = bundle.inputData.alias;
  }
  if (bundle.inputData.confidence && bundle.inputData.confidence !== "default") {
    body.confidence = bundle.inputData.confidence;
  } else {
    delete body.confidence;
  }
  if (bundle.inputData.polygon && bundle.inputData.polygon !== "default") {
    body.polygon = bundle.inputData.polygon;
  } else {
    delete body.polygon;
  }
  if (bundle.inputData.rag && bundle.inputData.rag !== "default") {
    body.rag = bundle.inputData.rag;
  } else {
    delete body.rag;
  }
  if (bundle.inputData.rawText && bundle.inputData.rawText !== "default") {
    // eslint-disable-next-line camelcase
    body.raw_text = bundle.inputData.rawtext;
  } else {
    delete body.raw_text;
  }
  return body;
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
