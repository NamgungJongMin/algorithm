const fs = require("fs");

const [N, r, c] = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);
const pos = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];

const recursive = (level, y, x, count) => {
  if (level === 0) {
    console.log(count);
    return;
  }

  for (let i = 0; i < pos.length; i++) {
    const ny = y + pos[i][0] * 2 ** (level - 1);
    const nx = x + pos[i][1] * 2 ** (level - 1);

    if (ny + 2 ** (level - 1) > r && r >= ny && nx + 2 ** (level - 1) > c && c >= nx) {
      recursive(level - 1, ny, nx, count + 2 ** ((level - 1) * 2) * i);
    }
  }
};

recursive(N, 0, 0, 0);