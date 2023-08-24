const fs = require('fs');

const input = fs.readFileSync('./18870.txt').toString().trim().split('\n');
const length = input.shift();
const x = input
  .toString()
  .split(' ')
  .map(el => +el);

const xSet = [...new Set(x)].sort((a, b) => a - b);
console.log(xSet);

const answer = [];

for (let i = 0; i < length; i++) {
  answer.push(xSet.indexOf(x[i]));
}

console.log(...answer);
