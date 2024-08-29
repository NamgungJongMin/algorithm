// 100 이하의 소수
const check = Array(Math.floor(50)).fill(true).fill(false, 0, 2);

for (let i = 2; i <= 7; i++) {
  if (!check[i]) continue;

  for (let j = i * 2; j <= 49; j += i) {
    check[j] = false;
  }
}

const prime = [];

check.forEach((el, idx) => {
  if (el) prime.push(idx);
});

console.log(prime);
