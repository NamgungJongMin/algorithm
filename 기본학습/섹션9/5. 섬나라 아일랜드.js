const N = 7;
const input = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];
const dx = [0, 0, -1, 1, -1, 1, 1, -1];
const dy = [-1, 1, 0, 0, -1, -1, 1, 1];
let answer = 0;

const dfs = (x, y) => {
  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx > input[0].length - 1 || ny < 0 || ny > input.length - 1) continue;
    if (input[ny][nx] === 0) continue;

    input[ny][nx] = 0;
    dfs(nx, ny);
  }
};

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    if (input[i][j] === 1) {
      input[i][j] = 0;
      dfs(j, i);
      answer++;
    }
  }
}

console.log(answer);
