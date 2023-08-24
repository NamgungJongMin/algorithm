const fs = require('fs');

const input = fs.readFileSync('./1100.txt').toString().trim().split('\n');

let answer = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    // 흰 검 흰 검
    if (i % 2 === 0) {
      answer += j % 2 === 0 && input[i][j] === 'F' ? 1 : 0;
    }
    //  검 흰 검 흰
    if (i % 2 === 1) {
      answer += j % 2 === 1 && input[i][j] === 'F' ? 1 : 0;
    }
  }
}

console.log(answer);
