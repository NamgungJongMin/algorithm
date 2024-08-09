const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input[1].split("").map((v) => +v);
console.log(arr.reduce((acc, cur) => acc + cur));