import {
  defineInputFields,
  defineCreate,
  type CreatePerform,
  type InferInputData,
} from "zapier-platform-core";
import { reqInferencePost, setupEnqueueBody } from "../utils/mindeeApi.js";
import jobSample from "../samples/jobProcessing.json" with { type: "json" };
import { inferenceCreateFields } from "./inputs.js";

/**
 * Defines the input fields for the enqueue operation.
 */
const inputFields = defineInputFields(inferenceCreateFields);

/**
 * Performs the enqueue operation.
 * @param z Zapier SDK
 * @param bundle Zapier bundle
 * @returns A promise that resolves to the enqueue results, containing queue information.
 */
const perform = (async (z, bundle) => {

  const body = setupEnqueueBody(bundle) as InferInputData<typeof inputFields>;
  const response = await reqInferencePost(z, body);
  return response.data;
}) satisfies CreatePerform<InferInputData<typeof inputFields>>;

/**
 * Defines the enqueue operation.
 */
export default defineCreate({
  key: "enqueue",
  noun: "Enqueue",

  display: {
    label: "Enqueue a File",
    description: "Enqueues a file to the server and returns the job."
  },

  operation: {
    perform,
    inputFields,
    sample: jobSample,
    outputFields: [
      {
        key: "job__id",
        label: "Job ID",
        type: "string"
      },
      {
        key:
          "job__model_id",
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
    ],
  },
});
