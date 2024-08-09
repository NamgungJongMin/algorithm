// NOTE:
// 첫 요소를 목표로 기준삼아 시작한다.
// 1. 배열에서 최솟값을 찾아 첫 요소와 교환
// 2. 두번 째 요소부터 시작해 최솟값을 찾아 두번째 요소와 교환
// 1, 2 과정을 반복

function solution(arr) {
  let answer = [...arr];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (answer[i] <= answer[j]) continue;

      [answer[i], answer[j]] = [answer[j], answer[i]];
    }
  }

  return answer;
}

const a = [13, 5, 11, 7, 23, 15];
console.log(solution(a));
