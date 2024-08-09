const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input.map((el) => el.split(" ").map((v) => +v));

arr.forEach(([a, b], idx) => {
  if (idx === arr.length - 1) return;
  console.log(a + b);
});