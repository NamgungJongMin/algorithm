const fs = require("fs");

const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const arr = input.slice(1).map((el) => el.split(" ").map(Number));
const check = Array.from(Array(arr.length), () => Array(arr[0].length).fill(0));
const queue = [];
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    if (arr[i][j] === 1) {
      check[i][j] = 1;
      queue.push([i, j]);
    }
    if (arr[i][j] === -1) {
      check[i][j] = -1;
    }
  }
}

let ripeAll = true;

for (let i = 0; i < check.length; i++) {
  for (let j = 0; j < check[0].length; j++) {
    if (check[i][j] === 0) {
      ripeAll = false;
    }
  }
}

if (ripeAll) {
  console.log(0);
  return;
}

let count = 0;
let pointer = -1;

while (queue.length) {
  const volume = pointer === -1 ? queue.length : queue.length - pointer - 1;

  if (volume === 0) break;

  for (let i = 0; i < volume; i++) {
    pointer++;
    const location = queue[pointer];

    for (let j = 0; j < 4; j++) {
      const ny = location[0] + dy[j];
      const nx = location[1] + dx[j];

      if (nx < 0 || nx > arr[0].length - 1 || ny < 0 || ny > arr.length - 1) continue;
      if (check[ny][nx] === 1) continue;
      if (check[ny][nx] === -1) continue;

      check[ny][nx] = 1;
      queue.push([ny, nx]);
    }
  }
  count++;
}

for (let i = 0; i < check.length; i++) {
  for (let j = 0; j < check[0].length; j++) {
    if (check[i][j] === 0) {
      console.log(-1);
      return;
    }
  }
}

console.log(count - 1);
