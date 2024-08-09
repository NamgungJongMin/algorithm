// 1.

function solution(arr) {
  const answer = [...arr];

  for (let i = 1; i < answer.length; i++) {
    for (let j = i; j > 0; j--) {
      if (answer[j] < answer[j - 1]) [answer[j], answer[j - 1]] = [answer[j - 1], answer[j]];
      else break;
    }
  }

  return answer;
}

const a = [13, 5, 11, 7, 23, 15];
console.log(solution(a));
