const fs = require('fs');

const input = fs.readFileSync('1149.txt').toString().trim().split('\n');
const N = Number(input.slice(0, 1));
const price = input.slice(1).map(el => el.split(' ').map(v => +v));
// console.log(input, N, price);

// N번째 집을 0,1,2 빨 파 초 색으로 칠했을 때의 최소값.
// const dp = [...Array(N + 1)].fill([0, 0, 0]);
// const dp = Array(N + 1).map(el => Array(3).fill(0));
const dp = [...Array(N + 1)];
// const dp = [...Array(N + 1)].map(el => Array(3).fill(0));
dp[1] = price[0];
console.log(dp);

// for (let i = 2; i <= N; i++) {
//   dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + price[i - 1][0];
//   dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + price[i - 1][1];
//   dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + price[i - 1][2];
//   // console.log(dp);
// }

// console.log(Math.min(...dp[N]));
