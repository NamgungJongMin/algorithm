const file = process.platform === 'linux' ? '/dev/stdin' : './sort/1083.txt';
const fs = require('fs');

const input = fs.readFileSync(file).toString().trim().split('\n');
const arrLength = input[0];
const arr = input[1].split(' ').map(el => Number(el));
const limit = Number(input[2]);

if (limit === 0) {
  console.log(...arr);
  return;
}

let count = 0;

for (let i = 0; i < arrLength - 1; i++) {
  let maxIndex = i;

  for (let j = i + 1; j < arrLength; j++) {
    if (arr[maxIndex] < arr[j]) maxIndex = j;
    if (limit - count === j - i) break;
  }

  if (maxIndex === i) continue;

  for (let j = maxIndex; j > i; j--) {
    count++;
    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
  }

  if (count === limit) break;
}

console.log(...arr);