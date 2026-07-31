import {
  defineInputFields,
  defineCreate,
  type CreatePerform,
  type InferInputData,
} from "zapier-platform-core";
import { reqPost, pollForInference } from "../api/requests.js";
import completeInference from "../api/samples/inferenceComplete.json" with { type: "json" };
import { splitCreateFields, pollingFields } from "../api/inputFields.js";
import { utilityOutputFields } from "../api/outputFields.js";

const inputFields = defineInputFields(
  [...splitCreateFields, ...pollingFields]
);

const perform = (async (z, bundle) => {
  const jobId = await reqPost(z, "split", bundle)
    .then(response => response.data.job.id);
  const response = await pollForInference(z, jobId, bundle.inputData.maxPollingTimeOut);
  return response.data;
}) satisfies CreatePerform<InferInputData<typeof inputFields>>;

export default defineCreate({
  key: "v2_split_file_enqueue_and_poll",
  noun: "Document Splitting Operation",
  display: {
    label: "Document Splitting Operation",
    description: "Split document pages using your Mindee split model. Can be chained with an Extraction model.",
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
