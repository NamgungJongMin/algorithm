const cards = [1, 2, 3, 4, 5];
const answer = [];

const permutation = (depth, leftCards, arr) => {
  // 종료 조건
  if (depth > 3) {
    answer.push(arr);
    return;
  }

  // depth별 실행할 함수
  for (let i = 0; i < leftCards.length; i++) {
    const cardsArr = leftCards.filter((_, idx) => idx !== i);
    recursive(depth + 1, cardsArr, [...arr, leftCards[i]]);
  }
};

permutation(1, cards, []);
console.log(answer);

// const cards = [1, 2, 3, 4, 5];
// const answer = [];

// const combination = (depth, leftCards, arr) => {
//   // 종료 조건
//   if (depth > 3) {
//     answer.push(arr);
//     return;
//   }

//   // depth별 실행할 함수
//   if (leftCards.length === 0) return;

//   for (let i = 0; i < leftCards.length; i++) {
//     const cardsArr = leftCards.slice(i + 1);
//     combination(depth + 1, cardsArr, [...arr, leftCards[i]]);
//   }
// };

// combination(1, cards, []);
// console.log(answer);
