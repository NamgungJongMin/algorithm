function solution(n, t, m, p) {
  let string = '';
  let number = 0;

  while (string.length < t * m) {
    string += number.toString(n).toUpperCase();
    number++;
  }

  let answer = '';
  let count = 0;

  while (answer.length < t) {
    const newString = string.substring(count, count + m);

    answer += newString[p - 1];
    count += m;
  }

  return answer;
}

const n = 2;
const t = 4;
const m = 2;
const p = 1;

console.log(solution(n, t, m, p));
