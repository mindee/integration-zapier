import { describe, it } from "mocha";
import { expect } from "chai";
import zapier from "zapier-platform-core";

import App from "../../index";

const appTester = zapier.createAppTester(App);
// read the `.env` file into the environment, if available
zapier.tools.env.inject();

describe("searches.inference", () => {
  it("should run", async () => {
    const bundle = { inputData: { jobId: "1234567890" } };

    // @ts-expect-error TBD
    const results = await appTester(App.searches["inference"].operation.perform, bundle);
    expect(results).to.not.be.undefined;
    // TODO: add more assertions
  });
});
