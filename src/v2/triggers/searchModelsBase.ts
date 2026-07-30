import {
  defineTrigger,
  type PollingTriggerPerform,
} from "zapier-platform-core";
import { buildModelSelectionValue, reqSearchModelsGet, type UtilityType } from "../api/requests.js";

const PER_PAGE = 50;
const utilityTypes: Set<string> = new Set(["classification", "crop", "split", "ocr"]);

type SearchModel = {
  id: string;
  name?: string;
  [key: string]: unknown;
};

function getUtilityType(modelType: unknown): UtilityType | undefined {
  if (typeof modelType !== "string" || !utilityTypes.has(modelType)) {
    return undefined;
  }
  return modelType as UtilityType;
}

export function createSearchModelsTrigger(key: string, modelType?: string) {
  const perform = (async (z, bundle) => {
    const search = bundle.meta?.withSearch || "";
    const pageIdx = Number(bundle.meta?.page || 0);
    const page = pageIdx + 1;

    const res = await reqSearchModelsGet(z, search, page, PER_PAGE, modelType);

    const models: SearchModel[] = res.data?.models ?? [];
    // This is so that the search field can grab [{ id, name }] for dynamic: "model.id.name"
    return models.map((model) => {
      const utilityType = getUtilityType(model["model_type"]);
      return {
        id: buildModelSelectionValue(model.id, utilityType),
        name: model.name || model.id,
      };
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
