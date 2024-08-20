// input 파싱
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let requestLessonCount = Number(input[0]);
if (requestLessonCount === 0) {
  return console.log(0);
}
let inputSchedual = new Array(requestLessonCount);
let dailyIncome = new Array(10000).fill(0);

for (let i = 0; i < requestLessonCount; i++) {
  const [lectureFee, deadLine] = input[i + 1].split(" ").map(Number);
  inputSchedual[i] = {
    lectureFee: lectureFee,
    deadLine: deadLine,
  };
}
// 값 기준으로 내림차순 정렬
inputSchedual.sort((a, b) => b.lectureFee - a.lectureFee);

// 값을 기준으로 스케쥴 확정
for (let i = 0; i < requestLessonCount; i++) {
  for (let j = inputSchedual[i].deadLine; j > 0; j--) {
    if (inputSchedual[i].lectureFee > dailyIncome[j - 1]) {
      dailyIncome[j - 1] = inputSchedual[i].lectureFee;
      break;
    }
  }
}

const sumArray = (arr) => {
  return arr.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
};
console.log(sumArray(dailyIncome));