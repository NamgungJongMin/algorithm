// function solution(a, b, c) {
//   let answer = "YES",
//     max;
//   let tot = a + b + c;

//   if (a > b) max = a;
//   else max = b;
//   if (c > max) max = c;
//   if (tot - max <= max) answer = "NO";
//   return answer;
// }

function solution(a, b, c) {
  const max = Math.max(a, b, c);
  const sum = [a, b, c].reduce((acc, cur) => acc + cur);

  console.log(max, sum);
  if (2 * max < sum) return "YES";
  return "NO";
}

console.log(solution(13, 33, 17));
