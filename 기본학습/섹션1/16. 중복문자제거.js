function solution(s) {
  //   let answer = "";
  //   //console.log(s.indexOf("K"));
  //   for (let i = 0; i < s.length; i++) {
  //     console.log(s[i], i, s.indexOf(s[i]));
  //     if (s.indexOf(s[i]) === i) answer += s[i];
  //   }
  //   return answer;
  //   let answer = "";
  //   for (let i = 0; i < s.length; i++) {
  //     if (answer.indexOf(s[i]) === -1) {
  //       answer += s[i];
  //     }
  //   }
  //   return answer;
}

function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (!answer.includes(s[i])) answer += s[i];
  }

  return answer;
}
console.log(solution("ksekkset"));
