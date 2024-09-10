const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).map((el) => el.split(" ").map(Number));
const map = new Map();

arr.forEach((el) => {
  map.set(el[0], el[1]);
});

const q = [1];
const check = Array.from({ length: 101 }, () => 0);
check[1] = 1;

for (let i = 0, days = 1; i < q.length; days++) {
  for (const { length } = q; i < length; ) {
    const cur = q[i++];
    for (let j = 1; j <= 6; j++) {
      const next = cur + j;

      if (next === 100) {
        console.log(days);
        return;
      }
      if (next > 100) continue;
      if (map.has(next) && !check[next]) {
        q.push(map.get(next));
        check[map.get(next)] = 1;
        check[next] = 1;
        continue;
      }

      if (!check[next]) {
        q.push(next);
        check[next] = 1;
      }
    }
  }
}