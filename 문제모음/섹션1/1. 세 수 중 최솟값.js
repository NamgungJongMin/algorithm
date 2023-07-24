function solution(a, b, c) {
  let answer = a;
  let arr = [a, b, c];

  for (let i = 0; i < 2; i++) {
    if (arr[i] > arr[i + 1]) {
      answer = arr[i + 1];
    }
  }

  return answer;
}

console.log(solution(6, 5, 11));
