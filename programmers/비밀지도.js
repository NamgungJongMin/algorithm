const solution = (n, a, b) => {
  return a.map((el, index) => (el | b[index]).toString(2).padStart(n, 0).replaceAll(0, ' ').replaceAll(1, '#'));
};

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

console.log(solution(n, arr1, arr2));
