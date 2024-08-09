// function solution(s) {
//   let answer = "YES";
//   s = s.toLowerCase();
//   let len = s.length;
//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     if (s[i] != s[len - i - 1]) return "NO";
//   }
//   return answer;
// }

// function solution(s) {
//   let answer = "YES";
//   s = s.toLowerCase();
//   if (s.split("").reverse().join("") != s) return "NO";
//   return answer;
// }

function solution(s) {
  let upperCase = s.toUpperCase();
  let answer = "YES";
  for (let i = 0; i < s.length; i++) {
    if (upperCase.at(i) !== upperCase.at(-i - 1)) answer = "NO";
  }
  return answer;
}

let str = "gooG";
console.log(solution(str));
