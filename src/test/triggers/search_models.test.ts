import { describe, it } from "mocha";
import { expect } from "chai";
import zapier from "zapier-platform-core";

import App from "../../index";

const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe("triggers.search_models", () => {
  it("should run", async () => {
    const bundle = { inputData: {} };

    // @ts-expect-error TBD
    const results = await appTester(App.triggers["search_models"].operation.perform, bundle);
    expect(results).to.not.be.undefined;
    // TODO: add more assertions
  });
});
