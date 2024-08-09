// NOTE: sort 사용 고민하는 이유 : 시간복잡도 nlogN
// <<투 포인터 알고리즘>>

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

function solution(arr1, arr2) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < arr1.length) answer.push(arr1[p1++]);
  while (p2 < arr2.length) answer.push(arr2[p2++]);

  return answer;
}

// NOTE: 잘못된 답

// function solution(arr1, arr2) {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// function solution(arr1, arr2) {
//   const answer = [];
//   let pointerA = 0;
//   let pointerB = 0;

//   while (pointerA < arr1.length || pointerB < arr2.length) {
//     if (arr1[pointerA] < arr2[pointerB]) {
//       answer.push(arr1[pointerA]);
//       pointerA += 1;
//     } else if (arr1[pointerA] > arr2[pointerB]) {
//       answer.push(arr2[pointerB]);
//       pointerB += 1;
//     } else if (arr1[pointerA] === arr2[pointerB]) {
//       answer.push(arr1[pointerA]);
//       pointerA += 1;
//       answer.push(arr2[pointerB]);
//       pointerB += 1;
//     } else {
//       if (arr1[pointerA]) {
//         answer.push(arr1[pointerA]);
//         pointerA += 1;
//       } else {
//         answer.push(arr2[pointerB]);
//         pointerB += 1;
//       }
//     }

//     console.log(pointerA, pointerB);
//   }

//   return answer;
// }

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
