const fs = require("fs");
const input = fs
  .readFileSync("./10773.txt")
  .toString()
  .trim()
  .split("\n")
  .map((number) => +number);

let arr = [];
let answer = 0;

input.map((number, index) => {
  if (index === 0) return;
  if (number === 0) {
    arr.pop();
    return;
  }
  arr.push(number);
});

arr.map((number) => {
  answer += number;
});

console.log(answer);
