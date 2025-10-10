import {
  defineInputFields,
  defineCreate,
  type CreatePerform,
  type InferInputData,
} from "zapier-platform-core";
import { enqueue, setupEnqueueBody } from "../utils/mindeeApi.js";
import jobSample from "../samples/jobProcessing.json" with { type: "json" };

/**
 * Defines the input fields for the enqueue operation.
 */
const inputFields = defineInputFields([
  {
    key: "modelId",
    label: "Model ID",
    required: true,
    type: "string",
    dynamic: "model.id.name",
    helpText: "Start typing to search a model by name...",
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
      "Extract full document text as strings and fill the `rawText` attribute.",
  },
]);

/**
 * Performs the enqueue operation.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to the enqueue results, containing queue information.
 */
const perform = (async (z, bundle) => {

  const body = setupEnqueueBody(bundle) as InferInputData<typeof inputFields>;
  const response = await enqueue(z, body);
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
    sample: jobSample,
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
