import {
  type InputField,
} from "zapier-platform-core";

const optionDefault = "default";

const optionChoices = [
  { label: "Use Model Default", value: optionDefault, sample: "default" },
  { label: "Enabled", value: "true", sample:"true" },
  { label: "Disabled", value: "false", sample:"false" },
];

export const inferenceCreateFields:InputField<any>[] = [
  {
    key: "modelId",
    label: "Model ID",
    required: true,
    type: "string",
    dynamic: "search_models.id.name",
    helpText: "Start typing to search a model by name...",
  },
  {
    key: "file",
    label: "File to Send",
    required: true,
    type: "file",
    helpText: "The file to analyze.",
  },
  {
    key: "alias",
    label: "Alias",
    type: "string",
    helpText: "Use an alias to link the file to your own DB."
  },
  {
    key: "confidence",
    label: "Enable Confidence Scores",
    type: "string",
    choices: optionChoices,
    default: optionDefault,
    helpText:
      "Calculate confidence scores for values, and fill the confidence attribute of fields." +
      " Useful for automation.",
  },
  {
    key: "polygon",
    label: "Enable Confidence Scores",
    type: "string",
    choices: optionChoices,
    default: optionDefault,
    helpText:
      "Calculate bounding box polygons for all fields and fill the `locations` attribute.",
  },
  {
    key: "rag",
    label: "Enable Confidence Scores",
    type: "string",
    choices: optionChoices,
    default: optionDefault,
    helpText:
      "Enhance extraction accuracy with Retrieval-Augmented Generation.",
  },
  {
    key: "rawText",
    label: "Enable Confidence Scores",
    type: "string",
    choices: optionChoices,
    default: optionDefault,
    helpText:
      "Extract full document text as strings and fill the `rawText` attribute.",
  },
];
