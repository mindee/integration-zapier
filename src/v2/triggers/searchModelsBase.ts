import {
  defineTrigger,
  type PollingTriggerPerform,
} from "zapier-platform-core";
import { reqSearchModelsGet } from "../api/requests.js";

const PER_PAGE = 50;

type SearchModel = {
  id: string;
  name?: string;
  [key: string]: unknown;
};

export function createSearchModelsTrigger(key: string, modelType?: string) {
  const perform = (async (z, bundle) => {
    const search = bundle.meta?.withSearch || "";
    const pageIdx = Number(bundle.meta?.page || 0);
    const page = pageIdx + 1;

    const res = await reqSearchModelsGet(z, search, page, PER_PAGE, modelType);

    const models: SearchModel[] = res.data?.models ?? [];
    return models.map((model) => {
      return model;
    });
  }) satisfies PollingTriggerPerform;

  return defineTrigger({
    key,
    noun: "Model",
    display: {
      label: "List Models",
      description: "Internal",
      hidden: true,
    },
    operation: {
      perform,
      canPaginate: true,
      sample: {
        id: "12356-0987-0987DEE",
        name: "My model 1"
      },
    },
  });
}
