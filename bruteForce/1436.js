const fs = require("fs");
const input = fs.readFileSync("./1436.txt").toString().trim();
let count = 1;
let answer = 666;

while (count < +input) {
  answer++;
  if (String(answer).includes("666")) count++;
}

console.log(answer);
