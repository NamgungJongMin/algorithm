const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((el) => el.split(" ").map(Number));
const m = arr[0]; // 사용중인 메모리 바이트
const c = arr[1]; // 비활성화 비용

const dp = Array.from({ length: M + 1 }, () => Number.MAX_SAFE_INTEGER);
let maxLength = 0;

dp[0] = 0;

for (let i = 0; i < N; i++) {
  for (let j = dp.length - 1; j > 0; j--) {
    if (maxLength + m[i] < j) continue;

    dp[j] = j - m[i] <= 0 ? Math.min(c[i], dp[j]) : Math.min(dp[j - m[i]] + c[i], dp[j]);
  }
  maxLength += m[i];
}

console.log(dp.at(-1));