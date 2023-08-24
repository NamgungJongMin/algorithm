const fs = require('fs');

const input = fs.readFileSync('./1202.txt').toString().trim().split('\n');

const [N, K] = input
  .shift()
  .split(' ')
  .map(el => +el);

let answer = 0;
const jewels = input
  .splice(0, N)
  .map(jewel => jewel.split(' ').map(el => +el))
  .sort((a, b) => b[1] - a[1]);

const bags = input.map(el => +el).sort((a, b) => a - b);

console.log(jewels);
console.log(bags);

for (let i = 0; i < jewels.length; i++) {
  for (let j = 0; j < bags.length; j++) {
    if (jewels[i][0] <= bags[j]) {
      answer += jewels[i][1];
      bags.splice(j, 1);
      break;
    }
  }
}

console.log(answer);
