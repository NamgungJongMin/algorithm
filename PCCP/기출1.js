function solution(bandage, health, attacks) {
  const maxCount = attacks.at(-1)[0];
  let successCount = 0;
  let answer = health;

  for (let i = 1; i <= maxCount; i++) {
    let attacked = false;
    successCount += 1;

    for (let j = 0; j < attacks.length; j++) {
      if (attacks[j][0] === i) {
        attacked = true;
        successCount = 0;
        answer -= attacks[j][1];
        break;
      }
    }

    if (answer <= 0) return -1;

    if (!attacked) {
      answer = answer + bandage[1] > health ? health : answer + bandage[1];

      if (successCount === bandage[0]) {
        answer = answer + bandage[2] > health ? health : answer + bandage[2];
        successCount = 0;
      }
    }
  }

  return answer;
}

// bondage 시전 시간, 초당 회복량, 추가 회복량
// health 최대체력
// attacks 공격 시간, 피해량

// 남은 체력 return / 죽었다면 -1
console.log(
  solution([1, 1, 1], 5, [
    [1, 2],
    [3, 2],
  ])
);
