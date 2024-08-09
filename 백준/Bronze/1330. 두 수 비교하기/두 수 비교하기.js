const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ");
const [a, b] = input.map((v) => +v);

if (a > b) console.log(">");
else if (a < b) console.log("<");
else console.log("==");