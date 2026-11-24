// One-Line Office Joke: 24-Hour Sprint
// Writes a single office joke (<=200 chars, one line, no trailing newline)
// to /output/entry.txt. Deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our office plant died, so facilities replaced it with a plastic one \u2014 it got promoted before me because it never takes a sick day.";

// Gate guard: the sealed scorer only accepts 1-200 characters, one line.
if ([...JOKE].length > 200 || JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("joke violates the 1-200 character single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
