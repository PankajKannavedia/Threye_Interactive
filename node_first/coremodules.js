const path = require('path');

const filename = path.join(__filename);
const baseName = path.basename(filename);
const extName = path.extname(filename);

console.log(filename);
console.log(baseName);
console.log(extName);

