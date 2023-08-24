const fs = require('fs');

const input = fs.readFileSync('./1931.txt').toString().trim().split('\n');
const N = input.shift();
const meetings = input.map(meeting => meeting.split(' ').map(el => +el));

meetings.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  return a[0] - b[0];
});

console.log(meetings);
