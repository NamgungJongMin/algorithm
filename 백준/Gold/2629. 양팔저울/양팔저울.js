const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const w = input[1].split(" ").map(Number);
const b = input[3].split(" ").map(Number);

const dp = Array.from({ length: w.reduce((acc, cur) => acc + cur, 0) + 1 }, () => 0);
dp[0] = 1;

for (let i = 0; i < w.length; i++) {
  for (let j = dp.length - 1; j >= 0; j--) {
    if (dp[j] === 1) dp[j + w[i]] = 1;
  }
  for (let j = 0; j < dp.length; j++) {
    if (dp[j] === 1) dp[Math.abs(j - w[i])] = 1;
  }
}

let answer = [];

b.forEach((el) => {
  if (dp[el] === 1) answer.push("Y");
  else answer.push("N");
});

console.log(answer.join(" "));