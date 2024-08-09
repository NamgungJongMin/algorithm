const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [str, i] = input.map((el) => el.trim());
console.log(str[i - 1]);