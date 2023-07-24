const fs = require("fs");
const input = fs.readFileSync("./1270.txt").toString().trim().split("\n");
input.shift();

input.map((land) => {
  let answer = "SYJKGW";
  let landMap = new Map();
  let landArr = land.split(" ");
  let numbers = landArr.shift();

  landArr.map((unit) => {
    landMap.set(unit, landMap.get(unit) + 1 || 1);
  });

  console.log(landMap);

  for (const [key, value] of landMap) {
    if (value > numbers / 2) answer = key;
  }

  console.log(answer);
});

/* ------------------------------------ 보이어 무어 ----------------------------------- */

// const fs = require("fs");
// const input = fs.readFileSync("./1270.txt").toString().trim().split("\n");
// input.shift();

// const atWar = "SYJKGW";

// input.map((land) => {
//   console.log(land);
//   let landArr = land.split(" ");
//   const majorLength = landArr.shift();
//   let major = land[1];
//   let count = 0;
//   let m = 0;

//   landArr.map((unit) => {
//     if (unit === major) {
//       count++;
//     } else {
//       count--;
//       if (count < 0) {
//         major = unit;
//         count = 1;
//       }
//     }
//   });

//   landArr.map((unit) => {
//     if (unit === major) m++;
//   });

//   if (count > 0 && m > majorLength / 2) {
//     console.log(major);
//   } else {
//     console.log(atWar);
//   }
// });
