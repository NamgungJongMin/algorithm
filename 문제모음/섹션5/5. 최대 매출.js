function solution(k, arr) {
  //   let answer,
  //     sum = 0;
  //   for (let i = 0; i < k; i++) sum += arr[i];
  //   answer = sum;
  //   for (let i = k; i < arr.length; i++) {
  //     sum += arr[i] - arr[i - k];
  //     answer = Math.max(answer, sum);
  //   }
  //   return answer;

  let sumArr = [];
  let sum = 0;
  let del = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      sumArr.push(sum);
      sum -= arr[del];
      del++;
    }
  }

  return Math.max(...sumArr);
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
