const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).map(Number);

const positive = arr.filter((el) => el > 0).sort((a, b) => b - a);
const negative = arr.filter((el) => el <= 0).sort((a, b) => a - b);

let positiveSum = 0;
for (let i = 0; i < positive.length; i += 2) {
  if (i === positive.length - 1) {
    positiveSum += positive[i];
    break;
  }

  if (positive[i + 1] === 1) positiveSum += positive[i] + positive[i + 1];
  else positiveSum += positive[i] * positive[i + 1];
}

let negativeSum = 0;
for (let i = 0; i < negative.length; i += 2) {
  if (i === negative.length - 1) {
    negativeSum += negative[i];
    break;
  }

  negativeSum += negative[i] * negative[i + 1];
}

console.log(positiveSum + negativeSum);