// NOTE: 알고리즘 적으로 어떻게 풀지 모르겠다 -> 완전탐색으로 모든 경우의수 찾고 제외하기

function solution(test) {
  //   let answer = 0;
  //   m = test.length;
  //   n = test[0].length;
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= n; j++) {
  //       let cnt = 0;
  //       for (let k = 0; k < m; k++) {
  //         let pi = (pj = 0);
  //         for (let s = 0; s < n; s++) {
  //           if (test[k][s] === i) pi = s;
  //           if (test[k][s] === j) pj = s;
  //         }
  //         if (pi < pj) cnt++;
  //       }
  //       if (cnt === m) answer++;
  //     }
  //   }
  //   return answer;

  let answer = 0;

  for (let i = 1; i <= test[0].length; i++) {
    for (let j = 1; j <= test[0].length; j++) {
      if (i === j) continue;

      let isMatched = true;

      for (let k = 0; k < test.length; k++) {
        if (test[k].indexOf(i) > test[k].indexOf(j)) {
          isMatched = false;
          break;
        }
      }

      if (isMatched) answer++;
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
