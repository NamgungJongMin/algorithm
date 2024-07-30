// NOTE: 그리디 대표 문제
// 문제를 풀기 위해 데이터를 어떤 방식으로 정렬할 수 있는지를 생각해보자.
// 이 문제의 경우 회의 시간이 빨리 끝나는 기준으로 정렬하고 풀어보자.

function solution(arrs) {
  let answer = 1;
  let newArr = [...arrs].sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));
  let target = newArr[0][1];

  for (let i = 1; i < newArr.length; i++) {
    if (target <= newArr[i][0]) {
      answer++;
      target = newArr[i][1];
    }
  }

  return answer;
}

const arrs = [
  [3, 3],
  [1, 3],
  [2, 3],
];

console.log(solution(arrs));
