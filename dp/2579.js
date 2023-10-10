const fs = require('fs');

const input = fs.readFileSync('./2579.txt').toString().trim().split('\n');

const N = Number(input.slice(0, 1));
const stairs = input.slice(1).map(el => +el);
console.log(N, stairs);

// N번째 계단까지 있을 때 최대 합
const dp = new Array(N + 1);
// 계단 하나라면 하나는 무조건 밟아야함
dp[1] = stairs[0];
// 계단 두개면 두개 다 밟을 때가 최대값
dp[2] = dp[1] + stairs[1];
// 계단 세개면 3번째는 무조건 밟아야하고 1,2 중 선택
dp[3] = Math.max(stairs[0], stairs[1]) + stairs[2];

// n번째 계단 직전에
// 1. n-1을 밟았을 경우 : dp[n - 3] + stairs[i - 2] + stairs[i - 1]
// 2. n-2를 밟았을 경우 : dp[n - 2] + stairs[i - 1]
for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(dp[i - 3] + stairs[i - 2] + stairs[i - 1], dp[i - 2] + stairs[i - 1]);
}
console.log(dp[N]);
