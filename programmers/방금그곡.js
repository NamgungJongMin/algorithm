// 시간 관련 처리
// replace 메서드 parameter callback
// 문자열 비교

function solution(m, musicinfos) {
  const answerArr = [];

  const musics = musicinfos.map(el => el.split(','));

  // 재생시간 처리
  musics
    .map(el => {
      const arr = el.splice(0, 2);
      const time = [arr[0].split(':'), arr[1].split(':')];

      return 60 * (time[1][0] - time[0][0]) + (time[1][1] - time[0][1]);
    })
    .forEach((time, index) => musics[index].unshift(time));

  // #처리
  const melody = m.replace(/[A-Z]#/g, el => el.replace('#', '').toLowerCase());

  musics.forEach(arr => {
    arr[2] = arr[2].replace(/[A-Z]#/g, el => el.replace('#', '').toLowerCase());
    arr[2] = arr[2].slice(0, arr[0]);
    arr[2] = arr[2].padEnd(arr[0], arr[2]);
  });

  console.log(musics, melody);

  for (let i = 0; i < musics.length; i++) {
    if (musics[i][2].includes(melody)) {
      answerArr.push(musics[i]);
    }
  }

  answerArr.sort((a, b) => b[0] - a[0]);
  return answerArr.length === 0 ? '(None)' : answerArr[0][1];
}

const m = 'C#D#F#G#A#';
const musicinfos = ['22:55,23:00,HELLO,ABC#', '13:00,13:04,WORLD,ABC#ADB'];

console.log(solution(m, musicinfos));
