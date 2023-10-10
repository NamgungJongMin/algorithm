const fs = require('fs');

const input = fs.readFileSync('./2579.txt').toString().trim().split('\n');

const N = Number(input.slice(0, 1));
const stairs = input.slice(1).map(el => +el);
stairs.unshift(0);
console.log(N, stairs);

let answer = 0;

const dfs = (depth, count, sum) => {
  // 종료 조건
  if (count > 6) return;

  if (depth === N) {
    if (sum > answer) answer = sum;
    return;
  }

  // 분기 처리
  // 한 계단
  if (count < 2 && depth < N) {
    dfs(depth + 1, count + 1, sum + stairs[depth + 1]);
  }
  // 두 계단
  if (depth < N - 1) {
    dfs(depth + 2, 1, sum + stairs[depth + 2]);
  }
};

dfs(0, 0, 0);

console.log(answer);
