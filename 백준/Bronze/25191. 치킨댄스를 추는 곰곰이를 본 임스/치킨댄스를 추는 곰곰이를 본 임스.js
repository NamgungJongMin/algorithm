const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());

const chicken = Number(input[0]);
const beverage = input[1].split(" ").map((el) => Number(el));
let max = Math.floor(beverage[0] / 2) + Math.floor(beverage[1]);

console.log(max <= chicken ? max : chicken);