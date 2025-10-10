import { HttpResponse, ZObject } from "zapier-platform-core";
import { MINDEE_API_V2_URL } from "../constants";
import { setTimeout } from "node:timers/promises";

/**
 * Polls a Mindee API queue for the given job ID.
 * @param z Zapier SDK.
 * @param jobId The ID of the job to poll.
 * @returns A promise that resolves to the response from the server.
 */
async function pollServer(z: ZObject, jobId: string): Promise<HttpResponse> {
  return await z.request({
    url: `${MINDEE_API_V2_URL}/v2/search/models`,
    params: {
      // eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
      job_id: jobId,
    },
  });
}

/**
 * Enqueues a file to the server and returns information about the queue.
 * @param z Zapier SDK.
 * @param bundle Zapier bundle.
 * @param body The body of the request.
 * @returns A promise that resolves to the response from the server.
 */
export async function enqueue(z: ZObject, bundle: any, body: any): Promise<HttpResponse> {
  return await z.request({
    method: "POST",
    url: `${MINDEE_API_V2_URL}/v2`,
    body,
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
    model_id: bundle.inputData.model_id,
    file: bundle.inputData.file
  };
  if (bundle.inputData.alias && bundle.inputData.alias.length > 0) {
    body.alias = bundle.inputData.alias;
  }
  if (bundle.inputData.confidence !== "default") {
    body.confidence = bundle.inputData.confidence;
  }
  if (bundle.inputData.polygon !== "default") {
    body.polygon = bundle.inputData.polygon;
  }
  if (bundle.inputData.rag !== "default") {
    body.rag = bundle.inputData.rag;
  }
  if (bundle.inputData.raw_text !== "default") {
    // eslint-disable-next-line camelcase
    body.raw_text = bundle.inputData.raw_text;
  }
  return body;
}

/**
 * Gets the inference for a given job ID.
 * @param z Zapier SDK.
 * @param jobId The ID of the job/inference to poll.
 * @param maxPollingTimeOut The maximum polling timeout in seconds.
 * @returns A promise that resolves to the inference results, containing the result.
 */
export async function getInference(
  z: ZObject,
  jobId: string,
  maxPollingTimeOut: number = 180
): Promise<HttpResponse> {
  let response = await pollServer(z, jobId);
  if (response.data.inference) {
    return response.data;
  }
  if (!response.data.job) {
    throw new Error("Job not found");
  }
  let jobStatus: string = response.data.status as string;
  await setTimeout(2000);
  for (let i = 0; i < maxPollingTimeOut; i++) {
    if (
      response.data.status ||
      response.data.detail ||
      response.data?.job.error ||
      jobStatus === "Failed"
    ) {
      throw new Error("Processing failed.");
    }

    response = await pollServer(z, jobId);
    if ("inference" in (response.data)) break;

    if (!("job" in response.data))
      throw new Error("The Mindee API replied with an unexpected reply.");
    jobStatus = response.data.job.status as string;
  }
  return response;
}
