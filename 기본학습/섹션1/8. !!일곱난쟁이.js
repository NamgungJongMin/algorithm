// function solution(arr) {
//   let answer = arr;
//   // NOTE: reduce 메서드 활용
//   let sumAll = arr.reduce((a, b) => a + b, 0);

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let arrtmp = [...answer];

//       if (sumAll - arr[i] - arr[j] === 100) {
//         answer.splice(j, 1);
//         answer.splice(i, 1);
//         // i보다 j를 먼저 빼준 이유: 기존 배열이 달라지기 때문에 깊은 복사를 해야하는데 번거로워서 뒤에꺼부터 처리
//         return answer;
//       }
//     }
//     ``;
//   }
// }

// // NOTE: filter를 사용했는데  문제점이 있었다. 만약 같은 키를 가진 난쟁이가 다수일때 그들을 빼야한다면 예상한 값보다 더 많은 수가 빠져나가는 문제. 두명만 골라서 빼내야하기에  splice 활용이 맞다.

// // NOTE: first
// for (let i = 0; i < arr.length; i++) {
//   sumAll += arr[i];
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     let arrtmp = [...answer];

//     console.log(sumAll);
//     if (sumAll - arr[i] - arr[j] === 100) {
//       console.log(i, j);
//       answer = answer.filter((el) => {
//         return el !== arrtmp[i] && arrtmp[j] !== el;
//       });
//       return answer;
//     }
//   }
// }

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr.reduce((acc, cur, idx) => (idx === i || idx === j ? acc : acc + cur));

      if (sum === 100) return arr.filter((_, idx) => idx !== i && idx !== j);
    }
  }
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
