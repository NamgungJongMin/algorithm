// NOTE: 이분탐색을 활용한 결정 알고리즘
// 정답의 범위를 정한다. 최소 9 / 최대 45

function solution(m, arr) {
  let answer = [];
  let lt = Math.max(...arr);
  let rt = arr.reduce((acc, cur) => acc + cur);

  while (lt < rt) {
    let mid = Math.ceil((lt + rt) / 2);
    let sum = 0;
    let count = 1;

    for (let x of arr) {
      if (sum + x <= mid) sum += x;
      else if (sum + x > mid) {
        count++;
        sum = x;
      }
    }

    console.log(lt, rt, mid, count);

    if (count <= m) rt = mid;
    else if (count > m) lt = mid + 1;
  }
  return lt;
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, a));
