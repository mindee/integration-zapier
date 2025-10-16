import {
  defineInputFields,
  defineCreate,
  type CreatePerform,
  type InferInputData,
} from "zapier-platform-core";
import { reqInferencePost } from "../api/requests.js";
import jobSample from "../api/samples/jobProcessing.json" with { type: "json" };
import { inferenceCreateFields } from "../api/inputFields.js";
import { jobOutputFields } from "../api/outputFields.js";

/**
 * Defines the input fields for the enqueue operation.
 */
const inputFields = defineInputFields(inferenceCreateFields);

/**
 * Performs the enqueue operation.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to the enqueue results, containing queue information.
 */
const perform = (async (z, bundle) => {
  const response = await reqInferencePost(z, bundle);
  return response.data;
}) satisfies CreatePerform<InferInputData<typeof inputFields>>;

/**
 * Defines the enqueue operation.
 */
export default defineCreate({
  key: "v2_enqueue",
  noun: "Enqueue",
  display: {
    label: "Enqueue a File",
    description: "Send a file and return the job. " +
      "You'll need to poll for the inference using the job ID.",
    hidden: false,
  },
  operation: {
    perform: perform,
    inputFields: inputFields,
    sample: jobSample,
    outputFields: jobOutputFields,
  },
});
