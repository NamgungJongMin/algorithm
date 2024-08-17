function solution(N) {
  let answer;

  function recursive(depth, arr) {
    if (depth > N) {
      answer = arr;
      return;
    }

    recursive(depth + 1, [...arr, depth]);
  }

  recursive(1, []);
  return answer.join(" ");
}

const a = 3;
console.log(solution(a));
