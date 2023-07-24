const fs = require("fs");
const input = require("fs")
  .readFileSync("./3040.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => +el);

let sum = input.reduce((a, b) => a + b);
let answer = [...input];

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (sum - input[i] - input[j] !== 100) continue;
    answer.splice(j, 1);
    answer.splice(i, 1);
  }
}

answer.map((number) => {
  console.log(number);
});
