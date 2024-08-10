const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = input[1].split(" ").map((v) => +v);
const M = input[3].split(" ").map((v) => +v);

const map = new Map();

N.forEach((el) => map.set(el, true));
M.forEach((el) => (map.has(el) ? console.log(1) : console.log(0)));