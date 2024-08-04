const fs = require("fs");

const input = fs
  .readFileSync("./1181.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const n = +input[0];
const words = Array.from(new Set(input.slice(1, input.length)));
// console.log(n, words);

words.sort((a, b) => {
  if (a.length === b.length) {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  } else return a.length - b.length;
});

words.forEach((el) => console.log(el));
