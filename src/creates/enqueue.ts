import {
  defineInputFields,
  defineCreate,
  type CreatePerform,
  type InferInputData,
} from "zapier-platform-core";
import { MINDEE_API_V2_URL } from "../constants";

/**
 * Defines the input fields for the enqueue operation.
 */
const inputFields = defineInputFields([
  {
    key: "model_id",
    required: true,
    type: "string"
  },
  {
    key: "file",
    label: "File to Enqueue",
    required: true,
    type: "file"
  },
  {
    key: "alias",
    label: "Alias",
    type: "string",
    helpText: "Optional alias for the file."
  },
  {
    key: "confidence",
    label: "Enable Confidence Scores",
    type: "string",
    choices: [
      { label: "Use Model Default", value: "default", sample: "default" },
      { label: "Enabled", value: "true", sample:"true" },
      { label: "Disabled", value: "false", sample:"false" },
    ],
    default: "default",
    helpText:
      "Calculate confidence scores for all fields and fill the `confidence` attribute.",
  },
  {
    key: "polygon",
    label: "Enable Confidence Scores",
    type: "string",
    choices: [
      { label: "Use Model Default", value: "default", sample: "default" },
      { label: "Enabled", value: "true", sample:"true" },
      { label: "Disabled", value: "false", sample:"false" },
    ],
    default: "default",
    helpText:
      "Calculate bounding box polygons for all fields and fill the `locations` attribute.",
  },
  {
    key: "rag",
    label: "Enable Confidence Scores",
    type: "string",
    choices: [
      { label: "Use Model Default", value: "default", sample: "default" },
      { label: "Enabled", value: "true", sample:"true" },
      { label: "Disabled", value: "false", sample:"false" },
    ],
    default: "default",
    helpText:
      "Enhance extraction accuracy with Retrieval-Augmented Generation.",
  },
  {
    key: "rawText",
    label: "Enable Confidence Scores",
    type: "string",
    choices: [
      { label: "Use Model Default", value: "default", sample: "default" },
      { label: "Enabled", value: "true", sample:"true" },
      { label: "Disabled", value: "false", sample:"false" },
    ],
    default: "default",
    helpText:
      "Extract full document text as strings and fill the `raw_text` attribute.",
  },
]);

/**
 * Performs the enqueue operation.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to the enqueue results, containing queue information.
 */
const perform = (async (z, bundle) => {
  const body: InferInputData<typeof inputFields> = {
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
  if (bundle.inputData.rawText !== "default") {
    body.rawText = bundle.inputData.rawText;
  }
  const response = await z.request({
    method: "POST",
    url: `${MINDEE_API_V2_URL}/v2`,
    body,
  });
  return response.data;
}) satisfies CreatePerform<InferInputData<typeof inputFields>>;

/**
 * Defines the enqueue operation.
 */
export default defineCreate({
  key: "enqueue",
  noun: "Enqueue",

  display: {
    label: "Enqueue a File",
    description: "Enqueues a file to the server and returns information about the queue."
  },

  operation: {
    perform,
    inputFields,
    sample: {
      modelId: "12345678-1234-1234-1234-123456789ABC",
      file: { name: "filename.ext" },
    },
    outputFields: [
      {
        key: "job__id",
        label: "ID of the queue",
        type: "string"
      },
      {
        key:
          "job__model_id",
        label: "Model ID",
        type: "string"
      },
      { key: "job__filename", label: "Filename", type: "string" },
      { key: "job__alias", label: "(Optional) Alias", type: "string" },
      { key: "job__created_at", label: "Creation date", type: "datetime" },
      { key: "job__status", label: "Queue status", type: "string" },
      { key: "job__polling_url", label: "Polling URL", type: "string" },
      { key: "job__result_url", label: "Result URL", type: "string" },
      { key: "job__error", label: "Error" },
      { key: "job__webhooks[]", label: "Webhooks" }
    ],
  },
});
