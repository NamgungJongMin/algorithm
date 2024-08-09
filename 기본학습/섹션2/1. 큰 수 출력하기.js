function solution(arr) {
  //   let answer = [];
  //   answer.push(arr[0]);
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  //   }
  //   return answer;

  return arr.filter((el, i) => {
    if (i === 0) return true;
    else return arr[i] > arr[i - 1];
  });
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
