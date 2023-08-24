const fs = require('fs');

const input = fs
  .readFileSync('1072.txt')
  .toString()
  .trim()
  .split(' ')
  .map(v => +v);

const [total, win] = input;
const percentage = Math.floor((win / total) * 100);
const answer = 0;
let [low, high] = [0, 1000000000];
console.log(total, win, percentage, low, high);

const calculate = (mid, isWinning) => {
  if (isWinning) {
    const z = ((win + mid) / (total + mid)) * 100;

    low = z !== percentage ? low : mid + 1;
    high = z * 100 !== percentage ? mid : high;
    return z;
  }
};

while (low <= high) {
  const mid = parseInt((low + high) / 2, 10);
  const z = [calculate(mid, true), calculate(mid, false)];

  if (z[0] !== percentage) {
    answer = mid;
  }
}
