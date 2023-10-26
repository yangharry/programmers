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

function wheels() {
  return wheel[location].prev;
}

let isBreak = '';

for (let i = 1; i <= k; i++) {
  let [num, alph] = input[i].split(' ');
  if (i == 1) {
    wheel[location].value = alph;
  } else {
    for (let j = 0; j < num; j++) {
      location = wheels();
    }
    if (wheel[location].value == '?' || wheel[location].value == alph) {
      wheel[location].value = alph;
    } else {
      isBreak = '!';
      break;
    }
  }
}

let [lastNum, lastAlph] = input[k].split(' ');
let answer = [];
let lastKey = Object.keys(wheel).find((e) => wheel[e].value == lastAlph);

function wheels2() {
  lastKey = wheel[lastKey].next;
}

if (isBreak == '!') {
  console.log('!');
} else {
  for (let i = 0; i < m; i++) {
    if (i == 0) {
      answer.push(wheel[lastKey].value);
    } else {
      wheels2();
      answer.push(wheel[lastKey].value);
    }
  }

  if (answer.indexOf('?') == -1) {
    if ([...new Set(answer)].length != answer.join('').length) {
      console.log('!');
    } else {
      console.log(answer.join(''));
    }
  } else {
    if ([...new Set(answer)].length - 1 == answer.join('').replaceAll('?', '').length) {
      console.log(answer.join(''));
    } else {
      console.log('!');
    }
  }
}
