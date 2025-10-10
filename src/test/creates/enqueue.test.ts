// WARNING: CHATGPT SLOP BECAUSE I CANNOT GET THE FILE OBJEC TO MIMIC PROPER ZAPIER BEHAVIOR.
// TODO: investigate the aforementionned issues.
import zapier from "zapier-platform-core";
import App from "../../index";
import * as fs from "node:fs";
import * as path from "node:path";
import { beforeAll, afterAll, describe, expect, it } from "vitest";

process.env.ZAPIER_BASE_ENDPOINT = "https://platform.zapier.com";
process.env.ZAPIER_RPC_BASE = "https://platform.zapier.com/api/cli-rpc";
const appTester = zapier.createAppTester(App);

describe("creates.enqueue", () => {
  let origPerform: any;

  beforeAll(() => {
    origPerform = (App as any).creates.enqueue.operation.perform;
    (App as any).creates.enqueue.operation.perform = async (z: any, bundle: any) => {
      const p =
        typeof bundle.inputData.file === "string"
          ? bundle.inputData.file
          : bundle.inputData.file?.filepath;

      if (!p || !fs.existsSync(p)) throw new Error("file path missing");

      const stat = fs.statSync(p);
      const stream = fs.createReadStream(p);
      const filename = path.basename(p);
      const contentType = (
        filename.toLowerCase().endsWith(".pdf")
          ? "application/pdf"
          : "application/image"
      ) as string;
      // stash inside create context
      bundle.inputData.file = z.stashFile(stream, stat.size, filename, contentType);

      return origPerform(z, bundle);
    };
  });

  afterAll(() => {
    (App as any).creates.enqueue.operation.perform = origPerform;
  });

  it("should run", async () => {
    const bundle = {
      authData: { apiKey: process.env.MINDEE_V2_API_KEY },
      inputData: {
        filename: "sample.pdf",
        file: path.resolve(__dirname, "../fixtures/invoice.pdf"),
        model_id: process.env.MINDEE_V2_MODEL_ID,
      },
    };

    // @ts-expect-error test bundle
    const results = await appTester(App.creates.enqueue.operation.perform, bundle);
    expect(results).toBeDefined();
  });
});
