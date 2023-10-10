function solution(m, n, puddles) {
  const array = [...Array(n)].map(() => Array(m).fill(0));
  array[0][0] = 1;

  for (const [x, y] of puddles) {
    array[y - 1][x - 1] = null;
  }
  // console.log(array);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;
      if (array[i][j] === null) continue;

      let top = 0;
      let left = 0;

      if (i >= 1 && array[i - 1][j] !== null) {
        top = array[i - 1][j] % 1000000007;
      }
      if (j >= 1 && array[i][j - 1] !== null) {
        left = array[i][j - 1] % 1000000007;
      }

      array[i][j] = top + left;
    }
  }

  return array[n - 1][m - 1] % 1000000007;
}

const m = 4;
const n = 3;
const puddles = [[2, 2]];
console.log(solution(m, n, puddles));
