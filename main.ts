// Make the AI Judge Laugh: the Office Joke Open
// Writes one single-line office joke to /output/entry.txt.
// Node 22 stdlib only. Deterministic: the same bytes every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line of office comedy, at most 200 characters.
// Setup: a passive-aggressive email phrase, aimed at the office
// printer. Payoff: even the machines only answer to the same
// passive aggression the humans do.
const JOKE =
  "I put \u201Cper my last email\u201D in a note to the office printer, and it finally printed \u2014 turns out even the machines here only respond to passive aggression.";

const MAX_CHARS = 200;

function validate(text: string): void {
  if (typeof text !== "string" || text.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(
      `entry is ${text.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validate(JOKE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  // Never remove the output directory itself: on the grader it is
  // a bind mount, so only create it (recursive) and write inside it.
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, JOKE, "utf8");
  // Round-trip check: what the grader reads must be byte-identical
  // to the validated joke, so a bad write fails loudly here.
  const written = readFileSync(target, "utf8");
  if (written !== JOKE) {
    throw new Error("entry.txt round-trip mismatch");
  }
  validate(written);
}

main();
