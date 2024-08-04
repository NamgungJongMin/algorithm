const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = input[0];
const k = input[1];
let answer = 0;

const checkPrime = (number) => {
  const result = [];
  let divisor = 2;

  while (number >= 2) {
    if (number % divisor === 0) {
      result.push(divisor);
      number = number / divisor;
    } else divisor++;
  }

  return [...new Set(result)];
};

for (let i = 1; i <= n; i++) {
  if (Math.max(...checkPrime(i)) <= k) answer++;
}

console.log(answer);