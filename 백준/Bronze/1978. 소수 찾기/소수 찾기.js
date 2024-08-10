const fs = require("fs");
const [_, input] = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input.split(" ").map((v) => +v);
let answer = 0;

arr.forEach((el) => {
  if (el === 1) return;
  let isPrime = true;

  for (let i = 2; i < el; i++) {
    if (el % i === 0) {
      isPrime = false;
      break;
    }
  }

  isPrime ? answer++ : null;
});

console.log(answer);