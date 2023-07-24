const fs = require("fs");
const input = require("fs").readFileSync("./5671.txt").toString().trim().split("\n");
// console: [ '87 104\r', '989 1022\r', '22 25\r', '1234 1234' ]
const numArr = input.map((el) => el.split(" ").map((num) => +num));
// console: [ [ 87, 104 ], [ 989, 1022 ], [ 22, 25 ], [ 1234, 1234 ] ]

numArr.map((arr) => {
  let numbers = [];

  for (let i = arr[0]; i <= arr[1]; i++) {
    numbers.push(String(i));
    // for using string method
  }

  let unique = numbers.map((number) => new Set(number.split("")));
  let counts = numbers.length;

  // console numbers: [
  //   '87',  '88',  '89',  '90',
  //   '91',  '92',  '93',  '94',
  //   '95',  '96',  '97',  '98',
  //   '99',  '100', '101', '102',
  //   '103', '104'
  // ]

  // console unique: []
  // Set(2) { '8', '7' }, Set(1) { '8' }, Set(2) { '8', '9' },
  // Set(2) { '9', '0' }, Set(2) { '9', '1' }, Set(2) { '9', '2' },
  // Set(2) { '9', '3' }, Set(2) { '9', '4' }, Set(2) { '9', '5' },
  // Set(2) { '9', '6' }, Set(2) { '9', '7' }, Set(2) { '9', '8' },
  // Set(1) { '9' }, Set(2) { '1', '0' }, Set(2) { '1', '0' },
  // Set(3) { '1', '0', '2' }, Set(3) { '1', '0', '3' }, Set(3) { '1', '0', '4' }
  // ]

  numbers.map((number, index) => {
    if (number.length !== unique[index].size) counts--;
  });

  console.log(counts);
});
