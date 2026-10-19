const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const checks = [
  ['document language', /<html lang="en">/],
  ['viewport metadata', /name="viewport"/],
  ['skip link', /class="skip-link" href="#main"/],
  ['main landmark', /<main id="main">/],
  ['hero headline', /Building at the intersection of/],
  ['about section', /id="about"/],
  ['projects section and honest empty state', /id="work"[\s\S]*?Projects are in progress\./],
  ['experience section', /id="experience"/],
  ['skills section', /id="skills"/],
  ['learning section', /id="learning"/],
  ['contact section', /id="contact"/],
  ['certificate score', /88<small>%<\/small>/],
  ['email contact action', /mailto:emilyhealthtech@gmail\.com/],
  ['mobile navigation control', /aria-controls="primary-nav"/],
  ['reduced motion stylesheet', /prefers-reduced-motion:reduce/]
];
let failures = 0;
for (const [name, pattern] of checks) {
  const ok = pattern.test(html) || (name === 'reduced motion stylesheet' && fs.readFileSync(path.join(root, 'assets/styles.css'), 'utf8').includes('prefers-reduced-motion:reduce'));
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}`);
  if (!ok) failures++;
}
for (const local of ['assets/styles.css', 'assets/main.js', 'assets/content.js', 'assets/favicon.svg']) {
  const ok = fs.existsSync(path.join(root, local));
  console.log(`${ok ? 'PASS' : 'FAIL'} local asset ${local}`);
  if (!ok) failures++;
}
const css = fs.readFileSync(path.join(root, 'assets/styles.css'), 'utf8');
for (const [name, pattern] of [['tablet/mobile breakpoint', /@media\(max-width:650px\)/], ['tablet breakpoint', /@media\(max-width:900px\)/]]) {
  const ok = pattern.test(css);
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}`);
  if (!ok) failures++;
}
if (failures) {
  console.error(`\n${failures} check(s) failed.`);
  process.exit(1);
}
console.log(`\nAll ${checks.length + 4} structural checks passed.`);
