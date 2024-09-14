const fs = require("fs");

const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const test = input.slice(1).map((el) => el.split(" ").map(Number));
let answer = [];

const bfs = (before, after) => {
  const q = [[before, ""]];
  const check = { [before]: 1 };

  while (q.length) {
    const [number, command] = q.shift();

    if (number === after) {
      answer.push(command);
      return;
    }

    // D
    const n1 = (number * 2) % 10000;
    if (!check[n1]) {
      q.push([n1, command + "D"]);
      check[n1] = 1;
    }

    // S
    const n2 = number === 0 ? 9999 : number - 1;
    if (!check[n2]) {
      q.push([n2, command + "S"]);
      check[n2] = 1;
    }

    // L
    const n3 = (number % 1000) * 10 + Math.floor(number / 1000);
    if (!check[n3]) {
      q.push([n3, command + "L"]);
      check[n3] = 1;
    }

    // R
    const n4 = (number % 10) * 1000 + Math.floor(number / 10);
    if (!check[n4]) {
      q.push([n4, command + "R"]);
      check[n4] = 1;
    }
  }
};

for (let i = 0; i < test.length; i++) {
  bfs(test[i][0], test[i][1]);
}

console.log(answer.join("\n"));
