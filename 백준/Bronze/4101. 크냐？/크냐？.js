const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map((v) => +v));

input.slice(0, input.length - 1).forEach((arr) => {
  arr[0] > arr[1] ? console.log("Yes") : console.log("No");
});