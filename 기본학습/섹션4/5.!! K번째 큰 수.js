//NOTE: 중복제거

// function solution(n, k, card) {
//   //   let answer;
//   //   let tmp = new Set();
//   //   for (let i = 0; i < n; i++) {
//   //     for (let j = i + 1; j < n; j++) {
//   //       for (let k = j + 1; k < n; k++) {
//   //         tmp.add(card[i] + card[j] + card[k]);
//   //       }
//   //     }
//   //   }
//   //   let a = Array.from(tmp).sort((a, b) => b - a);
//   //   answer = a[k - 1];
//   //   return answer;
//   let answer = new Set();
//   for (let i = 0; i < card.length; i++) {
//     for (let j = i + 1; j < card.length; j++) {
//       for (let k = j + 1; k < card.length; k++) {
//         answer.add(card[i] + card[j] + card[k]);
//       }
//     }
//   }
//   return [...answer].sort((a, b) => {
//     return b - a;
//   })[k - 1];
// }

function solution(n, k, card) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        arr.push(card[i] + card[j] + card[k]);
      }
    }
  }

  const set = new Set(arr);
  return Array.from(set).sort((a, b) => b - a)[2];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
