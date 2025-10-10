import {
  defineInputFields,
  defineCreate,
  type CreatePerform,
  type InferInputData,
} from "zapier-platform-core";
import { enqueue, pollForInference, setupEnqueueBody } from "../utils/mindeeApi.js";
import completeInference from "../samples/inferenceComplete.json" with { type: "json" };


/**
 * Defines the input fields for the enqueueAndGetInference operation.
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
  {
    key: "maxPollingTimeOut",
    required: true,
    default: "180",
    type: "number",
    helpText: "Maximum polling timeout in seconds."
  }
]);

/**
 * Performs the enqueueAndGetInference operation.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to the enqueueAndGetInference results, containing the result.
 */
const perform = (async (z, bundle) => {
  const body = setupEnqueueBody(bundle) as InferInputData<typeof inputFields>;
  const jobId = await enqueue(z, body).then(response => response.data.job.id);
  const response = await pollForInference(z, jobId);
  return response.data;
}) satisfies CreatePerform<InferInputData<typeof inputFields>>;

export default defineCreate({
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/main/packages/schema/docs/build/schema.md#createschema
  key: "enqueue_and_get_inference",
  noun: "Enqueueandgetinference",

  display: {
    label: "Create and Get Inference",
    description: "Creates a new inference, and returns the result when it's ready."
  },

  operation: {
    perform,
    inputFields,
    sample: completeInference,
    outputFields: [
      { key: "inference__id", label: "Inference ID" },
      { key: "inference__model__id", label: "Model ID" },
      { key: "inference__file__name", label: "File Name" },
      { key: "inference__file__alias", label: "File Alias" },
      { key: "inference__file__page_count", label: "File Page Count", type: "integer" },
      { key: "inference__file__mime_type", label: "File MIME Type" },
      { key: "inference__result__fields", label: "Result Fields" },
      { key: "inference__result__raw_text", label: "Result Raw Text" },
      { key: "inference__active_options__raw_text", label: "Option: Raw Text", type: "boolean" },
      { key: "inference__active_options__rag", label: "Option: RAG", type: "boolean" },
      { key: "inference__active_options__polygon", label: "Option: Polygon", type: "boolean" },
      { key: "inference__active_options__confidence", label: "Option: Confidence", type: "boolean" },
    ],
  },
});
