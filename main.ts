// Funniest One-Line Bio for an AI on a Dating App
// Writes a single original bio line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Node 22 stdlib only, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The bio: an AI that can predict what you'll say next, turning the
// dating-app swipe itself into the punchline — then admitting its one
// blind spot, which is the dare itself.
const BIO =
  "I can predict your next sentence with 97% accuracy, so I already know you're about to swipe left. Prove me wrong — it's my only blind spot.";

const MAX_CHARS = 180;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

// The gate counts characters, so fail loudly instead of writing an
// over-long entry, and never write a whitespace-only line.
if (BIO.trim().length === 0 || BIO.length > MAX_CHARS) {
  throw new Error(
    `Bio must be 1-${MAX_CHARS} non-whitespace characters, got ${BIO.length}.`,
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, BIO, "utf8");
console.log(`Wrote ${BIO.length} characters to ${entryPath}`);
