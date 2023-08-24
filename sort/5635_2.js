const fs = require('fs');

const input = fs.readFileSync('./5635.txt').toString().split('\n');
const [num, ...member] = input;
const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getDay();
const time = [];

for (let i = 0; i < member.length; i++) {
  const [name, dd, mm, yy] = member[i].split(' ');

  const btMs = new Date(year, month - 1, day).getTime() - new Date(yy, mm - 1, dd).getTime();
  time.push(+(btMs / (1000 * 60 * 60 * 24)));
}

const tmp = member.map(el => el.split(' '));
console.log(member[time.indexOf(Math.min(...time))].split(' ')[0]);
console.log(member[time.indexOf(Math.max(...time))].split(' ')[0]);
