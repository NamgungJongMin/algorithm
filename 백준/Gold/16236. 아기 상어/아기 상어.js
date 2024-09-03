const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const N = +input[0];
const arr = input.slice(1).map((el) => el.split(" ").map(Number));
let check = Array.from(Array(N), () => Array(N).fill(0));
let queue = [];
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    if (arr[i][j] === 9) {
      queue.push(i, j);
    }
  }
}

const dy = [-1, 0, 0, 1];
const dx = [0, -1, 1, 0];
let size = 2;
let count = 0;
let tick = 0;

for (let i = 0, time = 1; i < queue.length; time++) {
  const canEat = [];

  for (const { length } = queue; i < length; ) {
    const oy = queue[i++];
    const ox = queue[i++];

    for (let j = 0; j < 4; j++) {
      const ny = oy + dy[j];
      const nx = ox + dx[j];

      if (nx < 0 || nx > arr.length - 1 || ny < 0 || ny > arr.length - 1) continue;
      if (check[ny][nx] === 1) continue;
      if (arr[ny][nx] !== 9 && arr[ny][nx] > size) continue;

      if (arr[ny][nx] !== 0 && arr[ny][nx] !== 9 && arr[ny][nx] < size) {
        canEat.push([ny, nx]);
        break;
      }

      queue.push(ny, nx);
      check[ny][nx] = 1;
    }
  }

  if (canEat.length) {
    canEat.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      return a[0] - b[0];
    });
    const [y, x] = canEat[0];
    i = 0;
    answer = time;

    queue = [y, x];
    check = Array.from(Array(N), () => Array(N).fill(0));
    arr[y][x] = 0;

    count++;
    if (count === size) {
      size++;
      count = 0;
    }
  }
}

console.log(answer);
