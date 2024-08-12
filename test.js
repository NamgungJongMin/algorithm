// https://www.acmicpc.net/problem/2164
const fs = require("fs");
const input = fs.readFileSync("linkedlist.txt").toString().trim();
const arr = [];

for (let i = 1; i <= +input; i++) {
  arr.push(i);
}

let start = 0;
let end = arr.length;

while (arr.slice(start, end).length > 1) {
  start++;
  arr.push(arr[start]);
  start++;
  end++;
}

console.log(...arr.slice(start, end));
