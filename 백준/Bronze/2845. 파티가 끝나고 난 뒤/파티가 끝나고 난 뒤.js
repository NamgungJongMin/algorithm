const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const people = input[0].split(" ").reduce((acc, cur) => acc * cur);
const news = input[1].split(" ");

console.log(...news.map((el) => Number(el) - people));