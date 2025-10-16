import {
  defineInputFields,
  defineSearch,
  type SearchPerform,
  type InferInputData,
} from "zapier-platform-core";
import completeInference from "../api/samples/inferenceComplete.json" with { type: "json" };
import { reqInferenceGet } from "../api/requests.js";
import { inferenceOutputFields } from "../api/outputFields.js";

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
  key: "v2_inference",
  noun: "Inference",
  display: {
    label: "Get Inference",
    description: "Get an inference by its ID.",
    hidden: false,
  },
  operation: {
    perform: perform,
    inputFields: inputFields,
    sample: completeInference,
    outputFields: inferenceOutputFields,
  },
});
