const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir);

const versions = files
  .filter(f => /^v(\d+)\.html$/i.test(f))
  .map(f => parseInt(f.match(/^v(\d+)\.html$/i)[1], 10))
  .sort((a, b) => a - b);

fs.writeFileSync(
  path.join(dir, 'versions.json'),
  JSON.stringify(versions)
);

console.log('versions.json written:', versions);
