const fs = require('fs');

const input = fs.readFileSync('./2644.txt').toString().trim().split('\n');
const n = input[0];
const [x, y] = input[1].split(' ').map(v => +v);
const rels = input.slice(3).map(rel => rel.split(' ').map(v => +v));

class Queue {
  constructor() {
    this.items = {};
    this.head = 1;
    this.tail = 0;
    this.length = 0;
  }

  enqueue(item) {
    this.tail++;
    this.items[this.tail] = item;
    this.length++;
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    this.length--;
    return item;
  }

  peek() {
    return this.items[this.head];
  }
}

if (n === 1) console.log(-1);

const graph = Array.from({ length: Number(input[0]) + 1 }).map(() => []);
const visited = Array.from({ length: Number(input[0]) + 1 }).map(() => false);

for (let i = 0; i < rels.length; i++) {
  const [x, y] = rels[i];
  graph[x].push(y);
  graph[y].push(x);
}

const counter = start => {
  let count = 0;
  const queue = new Queue();
  queue.enqueue([start, count]);

  while (queue.length !== 0) {
    const cur = queue.dequeue();
    if (visited[cur[0]]) continue;
    visited[cur[0]] = true;

    // console.log(graph[cur[0]]);

    for (let i = 0; i < graph[cur[0]].length; i++) {
      if (i === 0) count++;
      queue.enqueue([graph[cur[0]][i], count]);
      console.log(queue);

      if (graph[cur[0]][i] === y) {
        return count;
      }
    }
  }

  console.log(-1);
};

console.log(counter(x));
