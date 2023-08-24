function solution(n, lost, reserve) {
  let answer = 0;
  let lostArr = [...lost].sort((a, b) => a - b);
  let reserveArr = [...reserve].sort((a, b) => a - b);
  const self = [];

  lostArr.forEach(person => {
    if (reserveArr.includes(person)) {
      self.push(person);
    }
  });

  lostArr = lostArr.filter(person => !self.includes(person));
  reserveArr = reserveArr.filter(person => !self.includes(person));

  reserveArr.forEach(person => {
    if (lostArr.includes(person - 1)) {
      const targetIndex = lostArr.indexOf(person - 1);

      lostArr.splice(targetIndex, 1);
      return;
    }

    if (lostArr.includes(person + 1)) {
      const targetIndex = lostArr.indexOf(person + 1);

      lostArr.splice(targetIndex, 1);
    }
  });

  answer = n - lostArr.length;

  return answer;
}

const n = 5;
const lost = [3, 4];
const reserve = [2, 3];
console.log(solution(n, lost, reserve));
