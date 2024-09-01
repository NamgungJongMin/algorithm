const input = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const check = Array.from(Array(input.length), () => Array(input[0].length).fill(0).fill());
let answer = 0;

check[0][0] = 1;

const dfs = (x, y) => {
  if (x === input[0].length - 1 && y === input.length - 1) {
    answer++;
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx > input[0].length - 1 || ny < 0 || ny > input.length - 1) continue;
    if (input[ny][nx] === 1) continue;
    if (check[ny][nx] === 1) continue;

    check[ny][nx] = 1;
    dfs(nx, ny);
    check[ny][nx] = 0;
  }
};
dfs(0, 0);

console.log(answer);
