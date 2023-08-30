const lionScore = 1;
let maxScore = 1;

let answer = [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1];
const arr = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2];

function findAnswer(lionArr) {
  for (let i = 10; i >= 0; i--) {
    if (lionArr[i] > answer[i]) return true;
    if (lionArr[i] < answer[i]) return false;
  }
}

if (lionScore > maxScore) {
  maxScore = lionScore;
  answer = arr;
} else if (lionScore === maxScore) {
  answer = findAnswer(arr) ? arr : answer;
}

console.log(answer);
