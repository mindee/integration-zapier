// TODO
import { describe, expect, it } from "vitest";
import zapier from "zapier-platform-core";

import App from "../../../index.js";

const appTester = zapier.createAppTester(App);

// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe("searches.inference", () => {
  it("Non-existing job ID – must raise 4xx", async () => {
    const bundle = {
      authData: { apiKey: process.env["MINDEE_V2_API_KEY"] },
      inputData: {
        jobId: "fc405e37-4ba4-4d03-aeba-533a8d1f0f21",
      }
    };

    try {
      // @ts-expect-error TBD
      await appTester(App.searches["inference_by_polling"].operation.perform, bundle);
      expect.fail("Expected the operation to throw an error for Non-existing job ID");
    } catch (error: any) {
      expect(error.message).toContain("404");
    }

    await expect(
      // @ts-expect-error TBD
      appTester(App.searches["inference"].operation.perform, bundle)
    ).rejects.toThrow();
  });
});
