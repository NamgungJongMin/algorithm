// 모든 노드를 한 번씩 탐색하기 위한 기본적인 방법
// 완점 탐색 수행 방법 중 하나
// **최단거리** 탐색을 위한 목적으로 자주 사용
// Queue 자료구조 사용

// 1. 시작 노드를 Queue에 넣고 '방문처리'한다
// 2. Queue에서 원소를 꺼내어 방문하지 않은 인접 노드가 있는지 확인한다.
//    - 있다면, 방문하지 않은 인접 노드를 큐에 삽입하고 '방문처리'한다.
// 3. 2번 과정을 더 이상 반복할 수 없을 때까지 반복한다.

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
    return item;
  }

  peek() {
    return this.items[this.head];
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue);
