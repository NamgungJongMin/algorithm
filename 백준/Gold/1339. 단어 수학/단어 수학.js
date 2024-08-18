const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).map((el) => el.trim().split(""));
const map = new Map();

arr.forEach((strs) =>
  strs.reverse().forEach((str, idx) => {
    map.set(str, map.get(str) + 10 ** idx || 10 ** idx);
  })
);

answer = Array.from(map)
  .sort((a, b) => b[1] - a[1])
  .reduce((acc, cur, idx) => acc + cur[1] * (9 - idx), 0);

console.log(answer);