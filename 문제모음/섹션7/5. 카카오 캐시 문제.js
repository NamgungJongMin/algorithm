function solution(size, arr) {
  const answer = new Array(size).fill(null);

  for (let i = 0; i < arr.length; i++) {
    if (answer.includes(arr[i])) {
      answer.unshift(answer.splice(answer.indexOf(arr[i]), 1)[0]);
    } else {
      answer.unshift(arr[i]);
    }
  }
  return answer;
}

const cache = [3, 7, 8, 1, 2, 1, 2, 3, 4];
console.log("answer", solution(5, cache));
