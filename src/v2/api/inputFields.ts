import {
  type FieldChoices,
  defineInputFields,
} from "zapier-platform-core";

const optionDefault = "default";

const optionChoices: FieldChoices = [
  { label: "Use Model Default", value: optionDefault, sample: "default" },
  { label: "Enabled", value: "true", sample:"true" },
  { label: "Disabled", value: "false", sample:"false" },
];

export const inferenceCreateFields = defineInputFields([
  {
    key: "modelId",
    label: "Model to Use",
    required: true,
    type: "string",
    dynamic: "v2_search_models.id.name",
    helpText: "The model to use.",
  },
  {
    key: "file",
    label: "File to Send",
    required: true,
    type: "file",
    helpText: "The file to analyze.",
  },
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
