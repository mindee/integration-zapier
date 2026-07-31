import {
  defineInputFields,
  defineCreate,
  type CreatePerform,
  type InferInputData,
} from "zapier-platform-core";
import { reqPost, pollForInference } from "../api/requests.js";
import completeInference from "../api/samples/inferenceComplete.json" with { type: "json" };
import { ocrCreateFields, pollingFields } from "../api/inputFields.js";
import { utilityOutputFields } from "../api/outputFields.js";

const inputFields = defineInputFields(
  [...ocrCreateFields, ...pollingFields]
);

const perform = (async (z, bundle) => {
  const jobId = await reqPost(z, "ocr", bundle)
    .then(response => response.data.job.id);
  const response = await pollForInference(z, jobId, bundle.inputData.maxPollingTimeOut);
  return response.data;
}) satisfies CreatePerform<InferInputData<typeof inputFields>>;

export default defineCreate({
  key: "v2_ocr_file_enqueue_and_poll",
  noun: "Raw Text Reading (OCR)",
  display: {
    label: "Raw Text Reading (OCR)",
    description: "Extract raw document text using your Mindee OCR model.",
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
