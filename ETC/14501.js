const fs = require('fs');

const input = fs
  .readFileSync('./14501.txt')
  .toString()
  .trim()
  .split('\n')
  .map(v => v.split(' ').map(v => +v));

let [due, ...days] = input;

due = due[0];
const dp = new Array(due).fill(0);

for (let i = 0; i < due; i++) {
  const [duration, profit] = days[i];

  if (i + duration > due) continue; // 현재 날짜 + 기간이 n이 넘으면 상담 불가
  dp[i] += profit;
  // console.log(dp);
  for (let j = i + duration; j < due; j++) {
    // console.log(dp[j], dp[i]);
    dp[j] = Math.max(dp[j], dp[i]); // 현재 금액, i일 뒤에 받게 될 금액 비교
  }
}
// console.log(dp);

console.log(Math.max(...dp));
