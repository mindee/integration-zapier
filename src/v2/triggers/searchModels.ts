import {
  defineTrigger,
  type PollingTriggerPerform,
} from "zapier-platform-core";
import { reqSearchModelsGet } from "../api/requests.js";

const PER_PAGE = 50;

/**
 * Performs the trigger for getting models.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to a list of available models for a given API key.
 */
const perform = (async (z, bundle) => {
  const search = bundle.meta?.withSearch || "";
  const pageIdx = Number(bundle.meta?.page || 0);
  const page = pageIdx + 1;

  const res = await reqSearchModelsGet(z, search, page, PER_PAGE);

  const models: Array<object> = res.data?.models ?? [];
  // This is so that the search field can grab [{ id, name }] for dynamic: "model.id.name"
  return models.map((model: any) => ({ id: model.id, name: model.name || model.id }));
}) satisfies PollingTriggerPerform;

/**
 * Defines the trigger for getting models.
 */
export default defineTrigger({
  key: "v2_search_models",
  noun: "Model",
  display: {
    label: "List Models",
    description: "Internal",
    hidden: true,
  },
  operation: {
    perform,
    canPaginate: true,
    // Not 100% sure about this one
    sample: {
      id: "12356-0987-0987DEE",
      name: "My model 1"
    },
  },
});
