function solution(s) {
  // let answer;
  // let mid = Math.floor(s.length / 2);
  // if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  // else answer = s.substring(mid - 1, mid + 1);
  // //if(s.length%2===1) answer=s.substr(mid, 1);
  // //else answer=s.substr(mid-1, 2);
  // return answer;

  if (s.length % 2 !== 0) {
    return s[(s.length - 1) / 2];
  } else {
    return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
  }
}
console.log(solution("study"));
