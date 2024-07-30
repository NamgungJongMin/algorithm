function solution(arr) {
  let answer = [];
  let newArr = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== newArr[i]) answer.push(i + 1);
  }

  return answer;
}

const arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));
