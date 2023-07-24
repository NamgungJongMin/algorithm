function solution(s) {
  //   let answer = "";
  //   let cnt = 1;
  //   s = s + " ";
  //   for (let i = 0; i < s.length - 1; i++) {
  //     if (s[i] === s[i + 1]) cnt++;
  //     else {
  //       answer += s[i];
  //       if (cnt > 1) answer += String(cnt);
  //       cnt = 1;
  //     }
  //   }
  //   return answer;

  let answer = "";
  let preString = s[0];
  let count = 1;

  for (let i = 1; i < s.length; i++) {
    let string = s[i];

    if (string === preString) {
      count++;
    } else {
      answer += preString + count;
      preString = string;
      count = 1;
    }
  }
  answer += preString + count;

  return answer.replace(/1/g, "");
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
