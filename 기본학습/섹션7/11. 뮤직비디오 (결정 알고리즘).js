// NOTE: 이분탐색을 활용한 결정 알고리즘
// 정답의 범위를 정한다. 최소 9 / 최대 45

function solution(m, arr) {
  let answer = 0;
  let start = Math.max(...arr);
  let end = arr.reduce((acc, cur) => acc + cur);

  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);
    let sum = 0;
    let count = 1;

    for (let x of arr) {
      if (sum + x <= mid) sum += x;
      else if (sum + x > mid) {
        count++;
        sum = x;
      }
    }

    if (count <= m) {
      end = mid - 1;
      answer = mid;
    } else if (count > m) start = mid + 1;
  }
  return answer;
}
