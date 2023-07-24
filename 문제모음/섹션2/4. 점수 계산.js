function solution(arr) {
  //   let answer = 0,
  //     cnt = 0;
  //   for (let x of arr) {
  //     if (x === 1) {
  //       cnt++;
  //       answer += cnt;
  //     } else cnt = 0;
  //   }
  //   return answer;

  let answer = 0;
  let point = 0;

  arr.map((value) => {
    if (value === 1) {
      answer += 1 + point;
      point++;
    } else {
      point = 0;
    }
  });

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
