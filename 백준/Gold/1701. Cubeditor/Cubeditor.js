const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim();
let answer = 0;

const getMaxPi = (string) => {
  let max = 0;
  const failure = Array(string.length).fill(0);
  let k = 0;

  for (let i = 1; i < string.length; i++) {
    while (k > 0 && string[k] !== string[i]) k = failure[k - 1];

    if (string[k] === string[i]) {
      failure[i] = k + 1;
      k++;
    }

    if (failure[i] > max) max = failure[i];
  }
  return max;
};

for (let i = 0; i < input.length; i++) {
  const maxPi = getMaxPi(input.slice(i));
  if (maxPi > answer) answer = maxPi;
}

console.log(answer);