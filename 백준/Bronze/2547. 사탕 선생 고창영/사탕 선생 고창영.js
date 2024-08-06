const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim())
  .join(",")
  .split(",,");

const arr = input.slice(1).map((el) => el.split(",").map((el2) => BigInt(el2)));

arr.forEach((arr) => {
  const volume = arr[0];
  const candies = arr.slice(1, arr.length).reduce((acc, cur) => acc + cur);
  console.log(candies % volume === 0n ? "YES" : "NO");
});