function solution(s) {
  //   let answer = "YES";
  //   stack = [];
  //   for (let x of s) {
  //     if (x === "(") stack.push(x);
  //     else {
  //       if (stack.length === 0) return "NO";
  //       stack.pop();
  //     }
  //   }
  //   if (stack.length > 0) return "NO";
  //   return answer;

  if (s.replace(/\(/g, "").length !== s.length / 2) return "NO";

  let arr = s.split("");
  let left = 0;
  let right = 0;

  for (let x of arr) {
    if (x === "(") left++;
    else right++;
    console.log(left, right);

    if (left < right) return "NO";
  }

  return "YES";
}

let a = " (()()))";
console.log(solution(a));
