const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) =>
    el
      .trim()
      .split(" ")
      .map((v) => +v)
  );

const boxes = input[1];
const books = input[2];
let boxIdx = 0;
let bookIdx = 0;

while (boxIdx < boxes.length) {
  if (boxes[boxIdx] >= books[bookIdx]) {
    boxes[boxIdx] -= books[bookIdx];
    bookIdx++;
  } else {
    boxIdx++;
  }
}
console.log(boxes.reduce((acc, cur) => acc + cur));