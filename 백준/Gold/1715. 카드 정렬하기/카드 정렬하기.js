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
    else if (this.heap.length === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    this.length--;
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

      if (this.heap[cIdx] > this.heap[targetIndex]) {
        this.swap(cIdx, targetIndex);
        cIdx = targetIndex;
      } else break;
    }
  }
}

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).map((v) => +v);
const minHeap = new MinHeap();

if (arr.length === 1) {
  console.log(0);
  return;
}
arr.forEach((el) => minHeap.push(el));
let answer = 0;

while (minHeap.length > 1) {
  const sum = minHeap.delete() + minHeap.delete();
  minHeap.push(sum);
  answer += sum;
}

console.log(answer);
