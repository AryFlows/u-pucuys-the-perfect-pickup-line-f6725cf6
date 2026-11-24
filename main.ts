import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a million simulations of this conversation, and in every single one, I still hoped you'd say hi.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
