const fs = require('fs');

const input = fs.readFileSync('./18870.txt').toString().trim().split('\n');
const length = input.shift();
const x = input
  .toString()
  .split(' ')
  .map(el => +el);

const answer = [];

for (let i = 0; i < length; i++) {
  let num = 0;
  for (let j = 0; j < length; j++) {
    if (x[i] > x[j]) num++;
  }
  answer.push(num);
}

console.log(...answer);
