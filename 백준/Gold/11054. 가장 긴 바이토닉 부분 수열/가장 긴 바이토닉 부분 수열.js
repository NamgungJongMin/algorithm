const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = +input[0];
const arr = input[1].split(" ").map(Number);
const dp = Array.from({ length: N });
const dp2 = Array.from({ length: N });

dp[0] = 1;
dp2[0] = 1;

for (let i = 1; i < arr.length; i++) {
  let max = 0;

  for (let j = i - 1; j >= 0; j--) {
    if (arr[j] < arr[i] && dp[j] > max) {
      max = dp[j];
    }
  }

  dp[i] = max + 1;
}

for (let i = 1; i < arr.length; i++) {
  let max = 0;

  for (let j = i - 1; j >= 0; j--) {
    if (arr[i] < arr[j] && max < Math.max(dp[j], dp2[j])) {
      max = Math.max(dp[j], dp2[j]);
    }
  }

  dp2[i] = max + 1;
}

console.log(Math.max(...dp2));