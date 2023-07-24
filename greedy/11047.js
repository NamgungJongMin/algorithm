const fs = require("fs");
const input = fs.readFileSync("./11047.txt").toString().trim().split("\n");

let [number, sum] = input
  .shift()
  .split(" ")
  .map((el) => +el);

const unit = input.map((el) => +el);
let answer = 0;

while (sum !== 0) {
  for (let i = number - 1; i >= 0; i--) {
    if (unit[i] > sum) continue;

    sum -= unit[i];
    answer++;
    break;
  }
}

console.log(answer);
