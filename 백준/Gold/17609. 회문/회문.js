const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const strings = input.slice(1).map((el) => el.trim());
const answer = Array(strings.length).fill(2);

const isPalindrome = (string, lt, rt) => {
  while (lt < rt) {
    if (string[lt] === string[rt]) {
      lt++;
      rt--;
    } else return false;
  }
  return true;
};

strings.forEach((string, idx) => {
  let lt = 0;
  let rt = string.length - 1;

  while (lt < rt) {
    if (string[lt] === string[rt]) {
      lt++;
      rt--;
    } else {
      if (isPalindrome(string, lt + 1, rt) || isPalindrome(string, lt, rt - 1)) {
        answer[idx] = 1;
        return;
      }
      return;
    }
  }
  answer[idx] = 0;
});

console.log(answer.join("\n"));