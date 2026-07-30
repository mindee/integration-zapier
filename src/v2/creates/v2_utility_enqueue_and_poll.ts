import {
  defineInputFields,
  defineCreate,
  type CreatePerform,
  type InferInputData,
} from "zapier-platform-core";
import { reqUtilityPost, pollForInference } from "../api/requests.js";
import completeInference from "../api/samples/inferenceComplete.json" with { type: "json" };
import { utilityCreateFields, pollingFields } from "../api/inputFields.js";
import { utilityOutputFields } from "../api/outputFields.js";


/**
 * Defines the input fields for the enqueueAndGetInference operation.
 */
const inputFields = defineInputFields(
  [...utilityCreateFields, ...pollingFields ]
);

/**
 * Performs the enqueueAndGetInference operation on a utility.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to the enqueueAndGetInference results, containing the result.
 */
const perform = (async (z, bundle) => {
  const selectedUtility = bundle.inputData.utilityType;
  const jobId = await reqUtilityPost(z, selectedUtility, bundle)
    .then(response => response.data.job.id);
  const response = await pollForInference(z, jobId, bundle.inputData.maxPollingTimeOut);
  return response.data;
}) satisfies CreatePerform<InferInputData<typeof inputFields>>;

export default defineCreate({
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/main/packages/schema/docs/build/schema.md#createschema
  key: "v2_utility_file_enqueue_and_poll",
  noun: "Data Utility Request",
  display: {
    label: "Document Data Extraction",
    description: "Send a file to a utility model you've built on Mindee and retrieve the result.",
    hidden: false,
  },
  operation: {
    perform: perform,
    inputFields: inputFields,
    sample: completeInference,
    outputFields: utilityOutputFields,
    cleanInputData: false,
  },
});
