const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

const [a, b] = input.map((v) => +v);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);