import {
    defineInputFields,
    defineSearch,
    type InferInputData,
    type SearchPerform,
} from "zapier-platform-core";
import { API_V2_URL } from "../constants";

const inputFields = defineInputFields([
    {
        key: "modelId",
        type: "string",
        required: true,
    },
]);

const perform = (async (z, bundle) => {
    // `bundle.inputData` typed as `{ name?: string }`
    const response = await z.request(`${API_V2_URL}/search/models`);
    return response.data;
}) satisfies SearchPerform<InferInputData<typeof inputFields>>;

export default defineSearch({
    key: "models",
    noun: "Models",

    display: {
        label: "Model",
        description: "Search for a model by name.",
    },

    operation: {
        type: "search",
        inputFields,
        perform,
        sample: {
            id: "12345678-1234-1234-1234-123456789ABC",
            title: "My Model",
        },
    },
});
