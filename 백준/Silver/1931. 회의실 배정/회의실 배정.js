const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n").slice(1);
const arr = input.map((el) =>
  el
    .trim()
    .split(" ")
    .map((v) => +v)
);
let prev = 0;
let answer = 0;

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

arr.forEach(([start, end]) => {
  if (prev <= start) {
    answer++;
    prev = end;
  }
});

console.log(answer);