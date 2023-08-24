const fs = require('fs');

const input = fs.readFileSync('./18870.txt').toString().trim().split('\n');
input.shift();

const x = input
  .toString()
  .split(' ')
  .map(el => +el);

const answer = [];
const xSet = [...new Set(x)].sort((a, b) => a - b);
const map = new Map();

for (let i = 0; i < xSet.length; i++) {
  map.set(xSet[i], i);
}

x.forEach(el => answer.push(map.get(el)));

console.log(...answer);
