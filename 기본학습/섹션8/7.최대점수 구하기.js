const [N, M] = [5, 20];
const arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
const answer = [];

const recursive = (leftArr, leftTime, scoreArr) => {
  if (leftTime < 0) {
    answer.push(scoreArr.slice(0, -1).reduce((acc, cur) => acc + cur));
    return;
  } else if (leftArr.length === 0) {
    answer.push(scoreArr.reduce((acc, cur) => acc + cur));
  }

  for (let i = 0; i < leftArr.length; i++) {
    recursive(leftArr.slice(i + 1), leftTime - leftArr[i][1], [...scoreArr, leftArr[i][0]]);
  }
};

recursive(arr, M, []);

console.log(Math.max(...answer));
