// const fs = require('fs');

// const input = fs.readFileSync('./5635.txt').toString().trim().split('\n');
// const length = input.shift();
// const arr = input.map(person => person.split(' '));
// const name = arr.map(person => person.shift());

// let oldIdx = 0;
// let youngIdx = 0;
// console.log(arr);

// for (let i = 1; i < length; i++) {
//   // oldIdx
//   if (+arr[i][2] < +arr[oldIdx][2]) oldIdx = i;

//   if (+arr[i][2] === +arr[oldIdx][2]) {
//     if (+arr[i][1] < +arr[oldIdx][1]) oldIdx = i;

//     if (+arr[i][1] === +arr[oldIdx][1]) {
//       if (+arr[i][0] < +arr[oldIdx][0]) oldIdx = i;
//     }
//   }

//   // youngIdx
//   if (+arr[i][2] > +arr[youngIdx][2]) youngIdx = i;

//   if (+arr[i][2] === +arr[youngIdx][2]) {
//     if (+arr[i][1] > +arr[youngIdx][1]) youngIdx = i;

//     if (+arr[i][1] === +arr[youngIdx][1]) {
//       if (+arr[i][0] > +arr[youngIdx][0]) youngIdx = i;
//     }
//   }
// }

// console.log(name[youngIdx]);
// console.log(name[oldIdx]);

/* ----------------------------------- --- ---------------------------------- */
const fs = require('fs');

const input = fs.readFileSync('./5635.txt').toString().split('\n');
const [num, ...member] = input;

const time = [];

for (let i = 0; i < member.length; i++) {
  const [name, dd, mm, yy] = member[i].split(' ');

  const btMs = new Date(yy, mm - 1, dd).getTime();
  time.push(btMs / (1000 * 60 * 60 * 24));
}
console.log(time);
console.log(member);

const tmp = member.map(el => el.split(' '));
// console.log(member[time.indexOf(Math.min(...time))].split(' ')[0]);
// console.log(member[time.indexOf(Math.max(...time))].split(' ')[0]);
// let minIdx = 0;
// let maxIdx = 0;
for (let i = 1; i < tmp.length; i++) {
  if (time[i] > time[minIdx]) minIdx = i;
  if (time[i] < time[maxIdx]) maxIdx = i;
}
// console.log(tmp[minIdx][0]);
// console.log(tmp[maxIdx][0]);
