import {
  type OutputFields,
} from "zapier-platform-core";

export const jobOutputFields: OutputFields = [
  {
    key: "job__id",
    label: "Job ID",
    type: "string"
  },
  {
    key: "job__model_id",
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
];

export const inferenceOutputFields: OutputFields = [
  { key: "inference__id", label: "Inference ID" },
  { key: "inference__model__id", label: "Model ID" },

  { key: "inference__file__name", label: "File Name" },
  { key: "inference__file__alias", label: "File Alias" },
  { key: "inference__file__page_count", label: "File Page Count", type: "integer" },
  { key: "inference__file__mime_type", label: "File MIME Type" },

  { key: "inference__active_options__raw_text", label: "Option: Raw Text", type: "boolean" },
  { key: "inference__active_options__rag", label: "Option: RAG", type: "boolean" },
  { key: "inference__active_options__polygon", label: "Option: Polygon", type: "boolean" },
  { key: "inference__active_options__confidence", label: "Option: Confidence", type: "boolean" },

  { key: "inference__result__raw_text", label: "Result Raw Text" },
];
