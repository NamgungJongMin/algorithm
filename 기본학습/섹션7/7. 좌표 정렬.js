function solution(arrs) {
  return arrs.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
}

const arrs = [
  [2, 7],
  [1, 211],
  [1, 21],
  [2, 5],
  [3, 6],
];

console.log(solution(arrs));
