import {
  defineInputFields,
  defineSearch,
  type SearchPerform,
  type InferInputData,
} from "zapier-platform-core";
import completeInference from "../api/samples/inferenceComplete.json" with { type: "json" };
import { pollForInference } from "../api/requests.js";
import { pollingFields } from "../api/inputFields.js";
import { inferenceOutputFields } from "../api/outputFields.js";

/**
 * Defines the input fields for the inference search.
 */
const inputFields = defineInputFields([
  {
    key: "jobId",
    required: true,
    helpText: "The job UUID.",
  },
  ...pollingFields,
]);

/**
 * Performs the inference search.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to the inference results, containing the result.
 */
const perform = (async (z, bundle) => {
  const response= await pollForInference(
    z, bundle.inputData.jobId, bundle.inputData.maxPollingTimeOut
  );
  return response.data;
}) satisfies SearchPerform<InferInputData<typeof inputFields>>;

/**
 * Defines the inference search.
 */
export default defineSearch({
  key: "v2_inference_by_polling",
  noun: "Inference by polling",
  display: {
    label: "Poll for Inference",
    description: "Poll for an inference using a job ID.",
    hidden: false,
  },
  operation: {
    perform: perform,
    inputFields: inputFields,
    sample: completeInference,
    outputFields: inferenceOutputFields,
  },
});
