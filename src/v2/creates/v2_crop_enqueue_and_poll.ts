import {
  defineInputFields,
  defineCreate,
  type CreatePerform,
  type InferInputData,
} from "zapier-platform-core";
import { reqPost, pollForInference } from "../api/requests.js";
import completeInference from "../api/samples/inferenceComplete.json" with { type: "json" };
import { cropCreateFields, pollingFields } from "../api/inputFields.js";
import { utilityOutputFields } from "../api/outputFields.js";

const inputFields = defineInputFields(
  [...cropCreateFields, ...pollingFields]
);

const perform = (async (z, bundle) => {
  const jobId = await reqPost(z, "crop", bundle)
    .then(response => response.data.job.id);
  const response = await pollForInference(z, jobId, bundle.inputData.maxPollingTimeOut);
  return response.data;
}) satisfies CreatePerform<InferInputData<typeof inputFields>>;

export default defineCreate({
  key: "v2_crop_file_enqueue_and_poll",
  noun: "Document Crop Operation",
  display: {
    label: "Document Crop Operation",
    description: "Crop pages in a document using your Mindee Crop model. Can be chained with an Extraction model.",
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
