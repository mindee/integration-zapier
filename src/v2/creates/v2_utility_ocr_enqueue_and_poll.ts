import {
  defineInputFields,
  defineCreate,
  type CreatePerform,
  type InferInputData,
} from "zapier-platform-core";
import { reqUtilityPost, pollForInference } from "../api/requests.js";
import completeInference from "../api/samples/inferenceComplete.json" with { type: "json" };
import { utilityOcrCreateFields, pollingFields } from "../api/inputFields.js";
import { utilityOutputFields } from "../api/outputFields.js";

const inputFields = defineInputFields(
  [...utilityOcrCreateFields, ...pollingFields]
);

const perform = (async (z, bundle) => {
  const jobId = await reqUtilityPost(z, "ocr", bundle)
    .then(response => response.data.job.id);
  const response = await pollForInference(z, jobId, bundle.inputData.maxPollingTimeOut);
  return response.data;
}) satisfies CreatePerform<InferInputData<typeof inputFields>>;

export default defineCreate({
  key: "v2_utility_ocr_file_enqueue_and_poll",
  noun: "Document Full-Text Extraction (OCR)",
  display: {
    label: "Document Full-Text Extraction (OCR)",
    description: "Extract full document text using your Mindee OCR utility model.",
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
