import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const forbidden = ['example.com', 'localhost', 'chrome-extension://'];
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(dir, e.name);
  return e.isDirectory() ? walk(p) : [p];
});
const selfPath = path.join('scripts', 'qa.mjs');
const sourceFiles = walk(root).filter((p) => !p.includes('node_modules') && !p.includes('.git') && !p.endsWith(selfPath));
let failed = false;
for (const file of sourceFiles) {
  let text; try { text = fs.readFileSync(file, 'utf8'); } catch { continue; }
  for (const token of forbidden) if (text.includes(token)) { console.error(`Forbidden token ${token} in ${path.relative(root,file)}`); failed = true; }
}
const ws = path.join(root, 'pnpm-workspace.yaml');
if (fs.existsSync(ws)) {
  const text = fs.readFileSync(ws,'utf8');
  if (!/packages:\s*[\s\S]*-\s*['"]?\.['"]?/.test(text)) { console.error("pnpm-workspace.yaml no contiene packages: ['.']"); failed = true; }
}
if (fs.existsSync(path.join(root,'dist'))) {
  for (const file of walk(path.join(root,'dist'))) {
    let text; try { text=fs.readFileSync(file,'utf8'); } catch { continue; }
    for (const token of forbidden) if (text.includes(token)) { console.error(`Forbidden token ${token} in dist/${path.relative(path.join(root,'dist'),file)}`); failed=true; }
  }
}
if (failed) process.exit(1);
console.log('QA estático: OK');
