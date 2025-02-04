const fs = require('fs');
const path = require('path');

// 配置信息
const GITHUB_USERNAME = 'xuhao77'; // 例如：zhangsan
const REPO_NAME = 'xuhao77.github.io'; // 例如：weizhang-expression
const IMAGE_DIR = './images'; // 图片存放目录

// 读取图片文件
const files = fs.readdirSync(IMAGE_DIR);

// 生成 jsDelivr CDN 链接
const cdnImages = files.map(filename => {
    return `https://cdn.jsdelivr.net/gh/${GITHUB_USERNAME}/${REPO_NAME}@latest/images/${filename}`;
});

// 生成 JavaScript 文件内容
const jsContent = `const images = ${JSON.stringify(cdnImages, null, 2)};`;

// 写入到 scripts/images.js
fs.writeFileSync(path.join(__dirname, 'scripts', 'images.js'), jsContent);

console.log('图片列表已生成，使用 jsDelivr CDN 加速！');