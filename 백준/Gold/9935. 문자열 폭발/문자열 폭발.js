const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
let strs = input[0].trim().split("").reverse();
const except = input[1];
const answer = [];

while (strs.length > 0) {
  answer.push(strs.pop());

  let boom = true;
  for (let i = 1; i <= except.length; i++) {
    if (answer.at(-i) !== except.at(-i)) {
      boom = false;
      break;
    }
  }

  if (boom) {
    for (let i = 1; i <= except.length; i++) {
      answer.pop();
    }
  }
}

console.log(answer.length ? answer.join("") : "FRULA");