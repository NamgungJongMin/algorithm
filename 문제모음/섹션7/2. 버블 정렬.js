// NOTE:
// 마지막 요소를 목표로 기준삼아 시작한다.
// 1. 첫 요소와 다음 요소를 비교 첫 요소가 크다면 두 번째 요소와 자리를 바꾼다.
// 2. 두번 째  요소와 그 다음 요소를 비교 두 번째 요소가 크다면 세 번째 요소와 자리를 바꾼다.
// 3. 동작을 반복하면 마지막 요소에 배열의 가장 큰 값이 위치한다.
// 4. 이후 1-3 과정을 반복

function solution(arr) {
  let answer = [...arr];

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < arr.length - i; j++) {
      if (answer[j] <= answer[j + 1]) continue;

      [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
    }
  }

  return answer;
}

const a = [13, 5, 11, 7, 23, 15];
console.log(solution(a));
