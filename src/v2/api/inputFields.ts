import { defineInputFields, type FieldChoices } from "zapier-platform-core";

const optionDefault = "default";

const optionChoices: FieldChoices = [
  { label: "Use Model Default", value: optionDefault, sample: "default" },
  { label: "Enabled", value: "true", sample: "true" },
  { label: "Disabled", value: "false", sample: "false" },
];

const modelSearchTriggers = {
  extraction: "v2_search_extraction_models",
  utilities: {
    base: "v2_search_models",
    crop: "v2_search_crop_models",
    split: "v2_search_split_models",
    ocr: "v2_search_ocr_models",
    classification: "v2_search_classification_models",
  },
} as const;

function createBaseFields<const T extends string>(searchTriggerKey: T) {
  return [
    {
      key: "modelId",
      label: "Model to Use",
      required: true,
      type: "string" as const,
      dynamic: `${searchTriggerKey}.id.name` as const,
      helpText: "The model to use.",
    },
    {
      key: "file",
      label: "File to Send",
      required: true,
      type: "file" as const,
      helpText: "The file to analyze.",
    },
  ] as const;
}

const extractionBaseFields = createBaseFields(modelSearchTriggers.extraction);

const utilitiesBaseFields = createBaseFields(modelSearchTriggers.utilities.base);
const utilityCropBaseFields = createBaseFields(modelSearchTriggers.utilities.crop);
const utilitySplitBaseFields = createBaseFields(modelSearchTriggers.utilities.split);
const utilityOcrBaseFields = createBaseFields(modelSearchTriggers.utilities.ocr);
const utilityClassificationBaseFields = createBaseFields(modelSearchTriggers.utilities.classification);

export const utilityCreateFields = defineInputFields([
  ...utilitiesBaseFields,
]);

export const utilityCropCreateFields = defineInputFields([
  ...utilityCropBaseFields,
]);

export const utilitySplitCreateFields = defineInputFields([
  ...utilitySplitBaseFields,
]);

export const utilityClassificationCreateFields = defineInputFields([
  ...utilityClassificationBaseFields,
]);

export const utilityOcrCreateFields = defineInputFields([
  ...utilityOcrBaseFields,
]);

export const inferenceCreateFields = defineInputFields([
  ...extractionBaseFields,
  {
    key: "rawText",
    label: "Enable Raw Text (Full OCR)",
    type: "string",
    choices: optionChoices,
    default: optionDefault,
    helpText:
      "Add the full text content of your documents to the API response.",
  },
  {
    key: "rag",
    label: "Enable RAG (Continuous Learning)",
    type: "string",
    choices: optionChoices,
    default: optionDefault,
    helpText:
      "Enhance extraction accuracy with Retrieval-Augmented Generation using your own documents." +
      "\nRequires at least one training document configured for the model.",
  },
  {
    key: "polygon",
    label: "Enable Polygons (Bounding Boxes)",
    type: "string",
    choices: optionChoices,
    default: optionDefault,
    helpText:
      "Add the polygon coordinates of each extracted field to the API response." +
      "\nNot available on all plans.",
  },
  {
    key: "confidence",
    label: "Enable Confidence Scores",
    type: "string",
    choices: optionChoices,
    default: optionDefault,
    helpText:
      "Enable automated workflows by enhancing model accuracy and measuring field confidence." +
      "\nNot available on all plans.",
  },
]);

export const pollingFields = defineInputFields([
  {
    key: "maxPollingTimeOut",
    label: "Polling Timeout",
    required: true,
    default: "180",
    type: "number",
    helpText: "Stop attempting to retrieve the result after this many seconds. Raises an error when reached."
  },
]);
