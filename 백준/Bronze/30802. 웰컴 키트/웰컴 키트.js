const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [[people], requestSize, TP] = input.map((el) => el.split(" ").map((v) => +v));
let needT = 0;

requestSize.forEach((size) => {
  needT += Math.ceil(size / TP[0]);
});

console.log(needT);
console.log(`${Math.floor(people / TP[1])} ${people % TP[1]}`);