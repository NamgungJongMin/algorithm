// NOTE: sort 사용 고민하는 이유 : 시간복잡도 nlogN
// <<투 포인터 알고리즘>>

function solution(arr1, arr2) {
  //   let answer = [];
  //   let n = arr1.length;
  //   let m = arr2.length;
  //   let p1 = (p2 = 0);
  //   while (p1 < n && p2 < m) {
  //     if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
  //     else answer.push(arr2[p2++]);
  //   }
  //   while (p1 < n) answer.push(arr1[p1++]);
  //   while (p2 < m) answer.push(arr2[p2++]);
  //   return answer;

  let answer = [];
  let p1 = 0;
  let p2 = 0;

  while (arr1[p1] !== Number.MAX_SAFE_INTEGER || arr2[p2] !== Number.MAX_SAFE_INTEGER) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1]);
      if (p1 === arr1.length - 1) {
        arr1[p1] = Number.MAX_SAFE_INTEGER;
      } else {
        p1++;
      }
    } else {
      answer.push(arr2[p2]);
      if (p2 === arr2.length - 1) {
        arr2[p2] = Number.MAX_SAFE_INTEGER;
      } else {
        p2++;
      }
    }
  }
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
