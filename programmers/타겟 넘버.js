function solution(numbers, target) {
  let answer = 0;

  const recursion = (depth, arr) => {
    if (depth === numbers.length) {
      const sum = arr.reduce((acc, cur) => acc + cur);

      answer = sum === target ? answer + 1 : answer;
      return;
    }

    recursion(depth + 1, [...arr, numbers[depth]]);
    recursion(depth + 1, [...arr, -numbers[depth]]);
  };

  recursion(0, []);

  return answer;
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;
console.log(solution(numbers, target));
