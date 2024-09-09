const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((el) => el.split(" ").map(Number));
const list = Array.from({ length: N + 1 }, () => []);
const visited = [];
let answer = 0;

for (let i = 0; i < M; i++) {
  list[arr[i][0]].push(arr[i][1]);
  list[arr[i][1]].push(arr[i][0]);
}

// console.log(list);

for (let i = 1; i < list.length; i++) {
  if (visited.includes(i)) continue;

  const q = [i];
  visited.push(i);

  for (let j = 0; j < q.length; ) {
    const target = list[q[j++]];

    for (let k = 0; k < target.length; k++) {
      if (visited.includes(target[k])) continue;
      q.push(target[k]);
      visited.push(target[k]);
    }
  }

  // console.log(q);
  answer++;
}

console.log(answer);