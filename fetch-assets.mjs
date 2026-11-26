import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises";
import { join, dirname } from "node:path";

const ORIGIN = "https://penpix.lovable.app";
const SRC = "src/assets";

const names = (await readdir(SRC)).filter((f) => f.endsWith(".asset.json"));
console.log(`${names.length} assets to fetch from ${ORIGIN}\n`);

let ok = 0;
const failed = [];

for (const name of names) {
  const meta = JSON.parse(await readFile(join(SRC, name), "utf8"));
  const out = join("public", meta.url.replace(/^\//, ""));

  try {
    await stat(out);
    console.log(`skip   already there  ${meta.original_filename}`);
    ok++;
    continue;
  } catch {}

  try {
    const res = await fetch(ORIGIN + meta.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, buf);
    console.log(`ok     ${String(Math.round(buf.length / 1024)).padStart(5)} KB  ${meta.original_filename}`);
    ok++;
  } catch (err) {
    console.log(`FAIL   ${meta.original_filename}  ${err.message}`);
    failed.push(meta.original_filename);
  }
}

console.log(`\n${ok} of ${names.length} ready`);
if (failed.length) console.log("failed: " + failed.join(", "));