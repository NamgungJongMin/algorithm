const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n").slice(1);
const arr = input[0].split(" ").map((v) => +v);
let answer = 0;

arr
  .sort((a, b) => a - b)
  .reduce((acc, cur) => {
    answer += acc + cur;
    return acc + cur;
  }, 0);

console.log(answer);