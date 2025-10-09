import {
  defineInputFields,
  defineSearch,
  type InferInputData,
  type SearchPerform,
} from "zapier-platform-core";
import { MINDEE_API_V2_URL } from "../constants";

/**
 * Defines the input fields for the search for a model by name.
 */
const inputFields = defineInputFields([
  {
    key: "modelId",
    type: "string",
    required: true,
  },
]);

/**
 * Performs the search for a model by name.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to the search results.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
const perform = (async (z, bundle) => {
  const response = await z.request(`${MINDEE_API_V2_URL}/search/models`);
  return response.data;
}) satisfies SearchPerform<InferInputData<typeof inputFields>>;

/**
 * Defines the search for a model by name.
 */
export default defineSearch({
  key: "models",
  noun: "Models",

  display: {
    label: "Model",
    description: "Search for a model by name.",
  },

  operation: {
    inputFields,
    perform,
    sample: {
      id: "12345678-1234-1234-1234-123456789ABC",
      title: "My Model",
    },
  },
});
