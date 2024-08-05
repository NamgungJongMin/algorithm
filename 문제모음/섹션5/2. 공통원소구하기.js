//NOTE: 해당 문제는 2중 for 문으로 굉장히 쉽게 풀수 있는 문제이지만 문제에 보면 입력 범위가 1<=N<=30,000 으로 굉장히 큰 값이 들어갈 수 있다.
// 입력 범위가 큰 경우에는 작은 BigO의 차이가 크게 나타나기 때문에 시간복잡도를 줄일수 있는 방면으로 풀어가는 것이 좋다.
// sort는 nlogN / 배열 탐색 메서드의 경우는 n의 복잡도로 반복문 안의 배열 메서드 등으로 해결할 시 n^2의 복잡도로 풀게 된다.
// 투포인터 알고리즘을 사용하면 n의 복잡도로도 풀이를 할 수있다.

// function solution(arr1, arr2) {
//   let answer = [];
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);
//   let p1 = (p2 = 0);
//   while (p1 < arr1.length && p2 < arr2.length) {
//     if (arr1[p1] == arr2[p2]) {
//       answer.push(arr1[p1++]);
//       p2++;
//     } else if (arr1[p1] < arr2[p2]) p1++;
//     else p2++;
//   }
//   return answer;
// }

function solution(arr1, arr2) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  while (p1 < arr1.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
    } else {
      p2++;
    }

    if (p1 < p2) {
      p1++;
      p2 = 0;
    }
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
