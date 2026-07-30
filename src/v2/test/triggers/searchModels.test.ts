// NOTE: connection to the server works.
import { describe, expect, it } from "vitest";
import zapier from "zapier-platform-core";

import App from "../../../index.js";

const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

const bundle = {
  authData: { apiKey: process.env["MINDEE_V2_API_KEY"] },
  meta: {
    withSearch: "",
    page: 0,
  }
};

describe("triggers.search_models", () => {
  it("should return at least one exact utility model for each utility type", async () => {
    const utilities = ["crop", "split", "ocr", "classification"];

    for (const utility of utilities) {
      bundle.meta.withSearch = utility;
      bundle.meta.page = 0;
      // @ts-expect-error TBD
      const results: Array = await appTester(App.triggers["v2_search_models"].operation.perform, bundle);

      expect(results).toBeInstanceOf(Array);
      expect(results.length).toBeGreaterThanOrEqual(1);
      console.log(results);
      const hasUtilityNamedModel = results.some((model: any) => (
        model.model_type || "").toLowerCase() === utility
      );
      expect(hasUtilityNamedModel).toBe(true);
    }
  });

  it("should filter", async () => {
    bundle.meta.withSearch = "fin";
    // @ts-expect-error TBD
    const results: Array = await appTester(App.triggers["v2_search_models"].operation.perform, bundle);
    expect(results).toBeInstanceOf(Array);
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results.length).toBeLessThan(8);
  });

  it("should not filter", async () => {
    bundle.meta.withSearch = "";
    // @ts-expect-error TBD
    const results: Array = await appTester(App.triggers["v2_search_models"].operation.perform, bundle);
    expect(results).toBeInstanceOf(Array);
    expect(results.length).toBeGreaterThanOrEqual(5);
  });

  it("should paginate", async () => {
    bundle.meta.withSearch = "";
    bundle.meta.page = 99;
    // @ts-expect-error TBD
    const results: Array = await appTester(App.triggers["v2_search_models"].operation.perform, bundle);
    expect(results).toBeInstanceOf(Array);
    expect(results.length).toEqual(0);
  });
});
