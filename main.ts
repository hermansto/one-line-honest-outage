import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one honest line for a total outage, no trailing newline.
const LINE =
  "I broke everything, including the monitor that would tell me what I broke. Rebooting blind — I'll update you when something answers.";

function fail(message: string): never {
  throw new Error(`honest-outage: ${message}`);
}

if (LINE.length === 0) fail("line must not be empty");
if (LINE.length > 160) fail(`line is ${LINE.length} characters, over the 160 limit`);
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be exactly one line");
}
if (LINE !== LINE.trim()) fail("line must not start or end with whitespace");
if (LINE.endsWith("\n")) fail("line must not end with a newline");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");

const written = readFileSync(target);
const expected = Buffer.from(LINE, "utf8");
if (written.length !== expected.length) {
  fail(`entry.txt is ${written.length} bytes, expected ${expected.length}`);
}
if (!written.equals(expected)) fail("entry.txt does not match the line byte-for-byte");
if (written.length > 0 && written[written.length - 1] === 0x0a) {
  fail("entry.txt must not end with a newline");
}

console.log(
  `Wrote entry.txt: ${LINE.length} characters, ${written.length} bytes, one line, no trailing newline -> ${target}`,
);
