const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input.map((el) => el.split(" ").map((v) => +v));

arr.forEach((numbers, idx) => {
  if (idx === arr.length - 1) return;
  numbers.sort((a, b) => a - b);

  numbers[0] ** 2 + numbers[1] ** 2 === numbers[2] ** 2 ? console.log("right") : console.log("wrong");
});