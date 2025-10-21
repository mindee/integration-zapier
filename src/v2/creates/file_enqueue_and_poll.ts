import {
  defineInputFields,
  defineCreate,
  type CreatePerform,
  type InferInputData,
} from "zapier-platform-core";
import { reqInferencePost, pollForInference } from "../api/requests.js";
import completeInference from "../api/samples/inferenceComplete.json" with { type: "json" };
import { inferenceCreateFields, pollingFields } from "../api/inputFields.js";
import { inferenceOutputFields } from "../api/outputFields.js";


/**
 * Defines the input fields for the enqueueAndGetInference operation.
 */
const inputFields = defineInputFields(
  [...inferenceCreateFields, ...pollingFields]
);

/**
 * Performs the enqueueAndGetInference operation.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to the enqueueAndGetInference results, containing the result.
 */
const perform = (async (z, bundle) => {
  const jobId = await reqInferencePost(z, bundle)
    .then(response => response.data.job.id);
  const response = await pollForInference(z, jobId, bundle.inputData.maxPollingTimeOut);
  return response.data;
}) satisfies CreatePerform<InferInputData<typeof inputFields>>;

export default defineCreate({
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/main/packages/schema/docs/build/schema.md#createschema
  key: "v2_file_enqueue_and_poll",
  noun: "Data Extraction Request",
  display: {
    label: "Document Data Extraction",
    description: "Extract data from a document file and return the result." +
      " Use any of the models you've built on Mindee.",
    hidden: false,
  },
  operation: {
    perform: perform,
    inputFields: inputFields,
    sample: completeInference,
    outputFields: inferenceOutputFields,
  },
});
