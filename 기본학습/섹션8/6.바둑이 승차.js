const [C, N] = [259, 5];
const arr = [81, 58, 42, 33, 61];
let answer = [];

const recursive = (leftArr, sum, prevSum) => {
  if (sum > C) {
    answer.push(prevSum);
  } else if (leftArr.length === 0) {
    answer.push(sum);
  }

  for (let i = 0; i < leftArr.length; i++) {
    recursive(leftArr.slice(i + 1), sum + leftArr[i], sum);
  }
};

recursive(arr, 0, 0);
console.log(Math.max(...answer));
