const fs = require("fs");

const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const target = input[1];

let pointer = 0;
let needPop = K; // 빼야되는 개수
let answer = [];

while (needPop > 0) {
  const checkEnd = pointer + needPop;
  let nextPointer;
  let max = 0;

  for (let i = pointer; i <= checkEnd; i++) {
    if (+target[i] > max) {
      max = +target[i];
      nextPointer = i + 1;
    }
  }

  answer.push(max);
  needPop -= nextPointer - pointer - 1;
  pointer = nextPointer;
}

if (pointer <= target.length - 1) {
  target
    .split("")
    .slice(pointer)
    .forEach((el) => answer.push(+el));
}

console.log(+answer.join(""));
