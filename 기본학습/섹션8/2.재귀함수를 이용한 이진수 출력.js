function solution(N) {
  let answer;

  const recursive = (value, arr) => {
    const quotient = Math.floor(value / 2);
    const remainder = value % 2;

    if (quotient === 0) {
      answer = [...arr, remainder];
      return;
    }

    recursive(quotient, [...arr, remainder]);
  };

  recursive(N, []);

  return answer.reverse().join("");
}

const a = 11;
console.log(solution(a));
