import {
  defineTrigger,
  type PollingTriggerPerform,
} from "zapier-platform-core";
import { MINDEE_API_V2_URL } from "../constants";

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

  const res = await z.request({
    method: "GET",
    url: `${MINDEE_API_V2_URL}/v2/search/models`,
    // eslint-disable-next-line @typescript-eslint/naming-convention,camelcase
    params: { name: search, page, per_page: PER_PAGE },
  });

  const models = res.data?.models ?? [];
  // This is so that the search field can grab [{ id, name }] for dynamic: "model.id.name"
  return models.map((m: any) => ({ id: m.id, name: m.name || m.id }));
}) satisfies PollingTriggerPerform;

/**
 * Defines the trigger for getting models.
 */
export default defineTrigger({
  key: "search_models",
  noun: "Model",
  display: { label: "List Models", description: "Internal", hidden: true },
  operation: {
    perform,
    canPaginate: true,
    sample: { id: "12356-0987-0987DEE", name: "My model 1" }, // Not 100% sure about this one
  },
});
