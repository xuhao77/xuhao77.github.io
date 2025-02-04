const fs = require('fs');
const files = fs.readdirSync('./images');
const jsContent = `const images = ${JSON.stringify(files)};`;
fs.writeFileSync('./scripts/images.js', jsContent);