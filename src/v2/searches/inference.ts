import {
  defineInputFields,
  defineSearch,
  type SearchPerform,
  type InferInputData,
} from "zapier-platform-core";
import completeInference from "../samples/inferenceComplete.json" with { type: "json" };
import { reqInferenceGet } from "../utils/mindeeApi.js";

/**
 * Defines the input fields for the inference search.
 */
const inputFields = defineInputFields([
  {
    key: "inferenceId",
    required: true,
    helpText: "The inference UUID.",
  },
]);

/**
 * Performs the inference search.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to the inference results, containing the result.
 */
const perform = (async (z, bundle) => {
  const response= await reqInferenceGet(z, bundle.inputData.inferenceId);
  return response.data;
}) satisfies SearchPerform<InferInputData<typeof inputFields>>;

/**
 * Defines the inference search.
 */
export default defineSearch({
  key: "inference",
  noun: "Inference",

  display: {
    label: "Get Inference",
    description: "Gets an inference by ID.",
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
