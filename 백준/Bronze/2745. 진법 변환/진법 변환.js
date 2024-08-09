const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [str, base] = input;

console.log(parseInt(str, base));