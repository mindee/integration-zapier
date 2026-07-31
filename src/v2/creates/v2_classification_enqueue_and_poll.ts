import {
  defineInputFields,
  defineCreate,
  type CreatePerform,
  type InferInputData,
} from "zapier-platform-core";
import { reqPost, pollForInference } from "../api/requests.js";
import completeInference from "../api/samples/inferenceComplete.json" with { type: "json" };
import { classificationCreateFields, pollingFields } from "../api/inputFields.js";
import { utilityOutputFields } from "../api/outputFields.js";

const inputFields = defineInputFields(
  [...classificationCreateFields, ...pollingFields]
);

const perform = (async (z, bundle) => {
  const jobId = await reqPost(z, "classification", bundle)
    .then(response => response.data.job.id);
  const response = await pollForInference(z, jobId, bundle.inputData.maxPollingTimeOut);
  return response.data;
}) satisfies CreatePerform<InferInputData<typeof inputFields>>;

export default defineCreate({
  key: "v2_classification_file_enqueue_and_poll",
  noun: "Document Classification",
  display: {
    label: "Document Classification",
    description: "Classify documents using your Mindee classification utility model.",
    hidden: false,
  },
  operation: {
    perform,
    inputFields,
    sample: completeInference,
    outputFields: utilityOutputFields,
    cleanInputData: false,
  },
});
