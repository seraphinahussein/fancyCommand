// node fancyFileRange.js FILENAME FIRST LAST

const path = require('path');
const fs = require('fs');

if (process.argv.length !== 5) {
  return console.log(`Usage: node ${path.basename(__filename)} FILENAME FIRST LAST`);
}

let filename = path.resolve(process.cwd(), process.argv[2]);
let first = Number(process.argv[3]);
let last = Number(process.argv[4]);

if (!fs.existsSync(filename)) {
  return console.log(`${filename}: No such file or directory`);
}

let content = fs.readFileSync(filename, 'utf8');
let lines = content.split('\n');

for(let i = first - 1; i < last && i < lines.length; i++) {
  console.log(lines[i]);
}
