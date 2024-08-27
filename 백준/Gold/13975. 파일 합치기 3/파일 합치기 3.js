const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const T = +input[0].trim();
const arr = input
  .slice(1)
  .filter((_, idx) => idx % 2 === 1)
  .map((el) => el.split(" ").map(Number));

class MinHeap {
  constructor() {
    this.heap = [];
    this.length = 0;
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
    this.length++;
  }

  delete() {
    const root = this.heap[0];

    if (this.heap.length === 0) return null;
    else if (this.heap.length === 1) {
      this.heap = [];
      this.length = 0;
    } else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      this.length--;
    }

    return root;
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }
  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
  heapifyUp() {
    let cIdx = this.heap.length - 1;

    while (cIdx > 0) {
      const parentIdx = this.getParentIndex(cIdx);

      if (this.heap[cIdx] < this.heap[parentIdx]) {
        this.swap(cIdx, parentIdx);
        cIdx = parentIdx;
      } else break;
    }
  }
  heapifyDown() {
    let cIdx = 0;

    while (this.getLeftChildIndex(cIdx) < this.heap.length) {
      const leftChildIndex = this.getLeftChildIndex(cIdx);
      const rightChildIndex = this.getRightChildIndex(cIdx);
      const targetIndex = this.heap[leftChildIndex] > this.heap[rightChildIndex] ? rightChildIndex : leftChildIndex;
      // 자식노드가 하나만 있을 때에는 왼쪽거만 있을테니 조건문이 undefined일 때는 왼쪽걸 선택하도록 주의해야함.

      if (this.heap[cIdx] > this.heap[targetIndex]) {
        this.swap(cIdx, targetIndex);
        cIdx = targetIndex;
      } else break;
    }
  }
}

arr.forEach((array) => {
  const pq = new MinHeap();
  let price = 0;
  array.forEach((el) => pq.push(el));

  while (pq.length > 1) {
    let sum = pq.delete() + pq.delete();
    price += sum;
    pq.push(sum);
  }

  console.log(price);
});