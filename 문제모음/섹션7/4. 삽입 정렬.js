function solution(arr) {
  const answer = [...arr];

  for (let i = 1; i < answer.length; i++) {
    for (let j = i; j > 0; j--) {
      if (answer[j] < answer[j - 1]) [answer[j], answer[j - 1]] = [answer[j - 1], answer[j]];
    }
  }

  return answer;
}

const a = [11, 7, 5, 6, 10, 9];
console.log(solution(a));
