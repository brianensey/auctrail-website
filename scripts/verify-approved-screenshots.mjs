import { readFile, mkdir, copyFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const entries = JSON.parse(await readFile(path.join(root, 'scripts/approved-screenshots.json'), 'utf8'));
const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const errors = [];
for (const entry of entries) {
  if (!/^[a-z0-9-]+\.png$/.test(entry.file)) throw new Error('Unexpected screenshot filename');
  const source = path.join(root, 'public/screenshots/approved', entry.file);
  try {
    const bytes = await readFile(source);
    if (bytes.length < 24 || !bytes.subarray(0, 8).equals(signature)) throw new Error('Not a PNG');
    if (bytes.readUInt32BE(16) !== entry.width || bytes.readUInt32BE(20) !== entry.height) throw new Error('Image dimensions changed');
    if (createHash('sha256').update(bytes).digest('hex') !== entry.sha256) throw new Error('Image differs from the approved original');
  } catch (error) {
    errors.push(`${entry.file}: ${error.message}`);
  }
}
if (errors.length) throw new Error(`Approved screenshot verification failed; do not publish:\n${errors.join('\n')}`);
await mkdir(path.join(root, 'docs-site/screenshots'), { recursive: true });
for (const entry of entries) await copyFile(path.join(root, 'public/screenshots/approved', entry.file), path.join(root, 'docs-site/screenshots', entry.file));
console.log(`Verified ${entries.length} approved screenshots; documentation copies are synchronized.`);
