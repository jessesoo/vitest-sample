import { unstable_dev } from "wrangler";
import type { UnstableDevWorker } from "wrangler";
import { expect, test, beforeAll, afterAll } from "vitest";

const describe = setupMiniflareIsolatedStorage();

test("responds with url", async () => {
  console.log(getMiniflareBindings());
});
