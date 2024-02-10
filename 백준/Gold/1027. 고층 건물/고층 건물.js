const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const number = Number(input[0]);
const heights = input[1].split(' ').map(el => Number(el));

let answer = 0;

if (number === 1) {
  console.log(0);
  return;
}

for (let i = 0; i < number; i++) {
  let sum = 0;

  if (i < number - 1) {
    sum++;
    let prevSlopeR = heights[i + 1] - heights[i];

    for (let j = i + 2; j < number; j++) {
      const newSlopeR = (heights[j] - heights[i]) / (j - i);
      if (prevSlopeR < newSlopeR) {
        sum++;
        prevSlopeR = newSlopeR;
      }
    }
  }

  if (i > 0) {
    sum++;
    let prevSlopeL = heights[i] - heights[i - 1];

    for (let j = i - 2; j >= 0; j--) {
      const newSlopeL = (heights[i] - heights[j]) / (i - j);

      if (prevSlopeL > newSlopeL) {
        sum++;
        prevSlopeL = newSlopeL;
      }
    }
  }

  if (sum > answer) answer = sum;
}

console.log(answer);