const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const need = input[0].split(" ")[1].trim();
const arr = input[1].split(" ").map((v) => +v);
let start = 0;
let end = Math.max(...arr);
let answer;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  const sumCut = arr.reduce((acc, cur) => {
    if (cur > mid) return acc + cur - mid;
    else return acc;
  }, 0);

  if (sumCut >= need) {
    answer = mid;
    start = mid + 1;
  } else end = mid - 1;
}

console.log(answer);