const fs = require('fs');

const input = fs.readFileSync('./10818.txt').toString().trim().split('\n');
const integer = input[1].split(' ');

console.log(Math.min(...integer), Math.max(...integer));
