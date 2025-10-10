import { describe, expect, it } from "vitest";
import zapier from "zapier-platform-core";

import App from "../../index";

const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe("creates.enqueue_and_get_inference", () => {
  it("should run", async () => {
    const bundle = { inputData: {} };

    const results = await appTester(App.creates["enqueue_and_get_inference"].operation.perform, bundle);
    expect(results).toBeDefined();
    // TODO: add more assertions
  });
});
