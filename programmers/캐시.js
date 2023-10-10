function solution(cacheSize, cities) {
  let Time = 0;
  const Cities = cities.map(e => e.toLowerCase());
  const CacheM = [];
  for (let i = 0; i < Cities.length; i++) {
    if (CacheM.includes(Cities[i])) {
      // cache hit 발생할 경우
      Time += 1;
      const idx = CacheM.find(e => e == Cities[i]);
      CacheM.splice(idx, 1);
      CacheM.unshift(Cities[i]);
      console.log(Time);
    } else {
      // cache miss 발생할 경우
      Time += 5;
      console.log(Time);
      if (CacheM.length >= cacheSize) {
        CacheM.pop();
        CacheM.unshift(Cities[i]);
      } else {
        CacheM.unshift(Cities[i]);
      }
    }
  }
  return Time;
}

const c = 3;
const ci = ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul'];

console.log(solution(c, ci));
