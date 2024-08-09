const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).map((v) => +v);

arr.sort((a, b) => a - b);

console.log(arr.join("\n"));