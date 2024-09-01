const input = [8, 3];
const queue = [[input[0], 0]];
const check = Array.from(Array(10001), () => 0);
let answer = 0;

check[input[0]] = 1;

while (queue.length) {
  let node = queue.shift();

  for (let location of [node[0] - 1, node[0] + 1, node[0] + 5]) {
    if (location === input[1]) {
      console.log(node[1] + 1);
      return;
    }
    if (check[location] === 0 && location > 0 && location <= 10000) {
      check[location] = 1;
      queue.push([location, node[1] + 1]);
    }
  }
}

console.log(answer);
