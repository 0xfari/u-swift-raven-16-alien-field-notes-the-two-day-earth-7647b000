// Alien Field Notes: The Two Day Earth Review — a tourist's verdict on Earth.
// One line, at most two hundred characters, written to /output/entry.txt.
// The rating comes first so the reader knows it is a review, not a diary.
import * as fs from "node:fs";
import { join } from "node:path";

const REVIEW =
  "Four stars. The locals apologise to chairs, wave at mirrors, and then elect the chairs. Would visit again — the chairs are doing a fine job.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
for (const leftover of fs.readdirSync(outDir)) {
  fs.rmSync(join(outDir, leftover), { recursive: true, force: true });
}
// Only the review's own file is written, so the gate sees exactly one line.
fs.writeFileSync(join(outDir, "entry.txt"), REVIEW, "utf8");
