function solution(arrs) {
  let answer = 0;
  let t_line = [];
  let count = 0;

  for (let x of arrs) {
    t_line.push([x[0], "s"]);
    t_line.push([x[1], "e"]);
  }
  t_line.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1].charCodeAt() - b[1].charCodeAt()));
  console.log(t_line);

  for (let x of t_line) {
    if (x[1] === "s") count++;
    if (x[1] === "e") count--;

    if (count > answer) answer = count;
  }

  return answer;
}

const arrs = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arrs));
