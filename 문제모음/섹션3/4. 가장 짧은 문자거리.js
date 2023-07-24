function solution(s, t) {
  //   let answer = [];
  //   let p = 1000;
  //   for (let x of s) {
  //     if (x === t) {
  //       p = 0;
  //       answer.push(p);
  //     } else {
  //       p++;
  //       answer.push(p);
  //     }
  //   }
  //   p = 1000;
  //   for (let i = s.length - 1; i >= 0; i--) {
  //     if (s[i] === t) p = 0;
  //     else {
  //       p++;
  //       answer[i] = Math.min(answer[i], p);
  //     }
  //   }
  //   return answer;

  let answer = Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) continue;

    let min = 101;

    for (let j = i - 1; j > 0; j--) {
      if (s[j] === t) {
        min = i - j;
        break;
      }
    }

    for (let k = i + 1; k < s.length; k++) {
      if (s[k] === t) {
        if (k - i < min) {
          min = k - i;
        }
        break;
      }
    }
    answer[i] = min;
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
