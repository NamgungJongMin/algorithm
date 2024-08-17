const cards = [1, 2, 3, 4, 5];

// 순열
const answer1 = [];
const permutation = (depth, leftCards, arr) => {
  // 종료 조건
  if (depth > 3) {
    answer1.push(arr);
    return;
  }

  // depth별 실행할 동작
  for (let i = 0; i < leftCards.length; i++) {
    const cardsArr = leftCards.filter((_, idx) => idx !== i);
    permutation(depth + 1, cardsArr, [...arr, leftCards[i]]);
  }
};

permutation(1, cards, []);
console.log(answer1);

// 조합
const answer2 = [];
const combination = (depth, leftCards, arr) => {
  // 종료 조건
  if (depth > 3) {
    answer2.push(arr);
    return;
  }

  // depth별 실행할 함수
  if (leftCards.length === 0) return;

  for (let i = 0; i < leftCards.length; i++) {
    const cardsArr = leftCards.slice(i + 1);
    combination(depth + 1, cardsArr, [...arr, leftCards[i]]);
  }
};

combination(1, cards, []);
console.log(answer2);

// 중복 순열
const answer3 = [];
const pwr = (depth, leftCards, arr) => {
  // 종료 조건
  if (depth > 3) {
    answer1.push(arr);
    return;
  }

  // depth별 실행할 함수
  for (let i = 0; i < leftCards.length; i++) {
    const cardsArr = leftCards.filter((_, idx) => idx !== i);
    pwr(depth + 1, cardsArr, [...arr, leftCards[i]]);
  }
};

pwr(1, cards, []);
console.log(answer3);

// 중복 조합
const answer4 = [];
const cwr = (depth, leftCards, arr) => {
  // 종료 조건
  if (depth > 3) {
    answer3.push(arr);
    return;
  }

  // depth별 실행할 함수
  if (leftCards.length === 0) return;

  for (let i = 0; i < leftCards.length; i++) {
    const cardsArr = leftCards.slice(i);
    cwr(depth + 1, cardsArr, [...arr, leftCards[i]]);
  }
};

cwr(1, cards, []);
console.log(answer4);
