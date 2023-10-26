const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

const [m, k] = input[0].split(' ').map((e) => (e = +e));

const wheel = {};
for (let i = 0; i < m; i++) {
  let prev = (i + m - 1) % m;
  let next = (i + 1) % m;
  wheel[i] = { value: '?', prev: prev, next: next };
}

let location = 0;

let isBreak = '';

let checkAlph = [];

function wheels() {
  return wheel[location].prev;
}

function wheels2() {
  lastKey = wheel[lastKey].next;
}

for (let i = 1; i <= k; i++) {
  let [num, alph] = input[i].split(' ');
  if (i == 1) {
    wheel[location].value = alph;
  } else {
    for (let j = 0; j < num; j++) {
      location = wheels();
    }
    if (wheel[location].value == '?' || wheel[location].value == alph) {
      if (wheel[location].value == '?') {
        checkAlph.push(alph);
        if (checkAlph.indexOf(alph) != checkAlph.lastIndexOf(alph)) {
          isBreak = '!';
          break;
        } else {
          wheel[location].value = alph;
        }
      }
    } else {
      isBreak = '!';
      break;
    }
  }
}

if (isBreak == '!') {
  console.log('!');
}

let [lastNum, lastAlph] = input[k].split(' ');
let answer = [];
let lastKey = Object.keys(wheel).find((e) => wheel[e].value == lastAlph);

if (isBreak != '!') {
  for (let i = 0; i < m; i++) {
    if (i == 0) {
      answer.push(wheel[lastKey].value);
    } else {
      wheels2();
      answer.push(wheel[lastKey].value);
    }
  }

  console.log(answer.join(''));
}
