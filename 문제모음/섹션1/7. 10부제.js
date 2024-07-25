// function solution(day, arr) {
//   let answer = 0;
//   for (let x of arr) {
//     if (x % 10 == day) answer++;
//   }

//   return answer;
// }

function solution(day, arr) {
  return arr.reduce((acc, cur) => (cur % 10 === day ? acc + 1 : acc), 0);
}

arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));
