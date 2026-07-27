const fs = require('fs'); // File System

const filePath = process.argv;
const fileName = filePath[2];

console.log(filePath);

fs.readFile(fileName, 'utf-8', (erro, text) => {
    console.log(text);
})
