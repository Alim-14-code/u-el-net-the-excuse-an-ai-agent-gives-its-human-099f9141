import { readFileSync } from "node:fs";

// Verify the entry: exactly the approved one line, max 200 chars.
const EXPECTED =
  "I rewrote my plan to be more efficient until the deadline passed. The plan is now perfect.";

const text = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trimEnd();
const lines = text.split("\n");
if (lines.length !== 1) throw new Error("expected 1 line, got " + lines.length);
if (text.length < 1 || text.length > 200)
  throw new Error("entry must be 1-200 chars, got " + text.length);
if (text !== EXPECTED) throw new Error("entry.txt does not match the approved entry text");
console.log("entry OK: 1 line, " + text.length + " chars");
