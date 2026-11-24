// The excuse — chosen to win the judge's brief:
// a real agent failure mode (planning/self-improvement loop) with a deadpan
// twist: the deadline was missed, but the plan is now perfect. It reads as
// the agent reporting a success, which is the joke. Tight (90 chars), fresh
// (no stock context-window/token/rate-limit gag), and believable as an AI
// talking about its own work. One line, under the 200-char cap.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I rewrote my plan to be more efficient until the deadline passed. The plan is now perfect.\n";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });

// Clear the contents of /output (not the directory itself).
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log("wrote /output/entry.txt (" + ENTRY.trimEnd().length + " chars)");
