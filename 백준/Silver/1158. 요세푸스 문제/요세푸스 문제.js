const [nk] = (require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt') + '')
  .trim()
  .split(/\r?\n/);

const [n, k] = nk.split(' ').map((e) => (e = +e));

const wheel = {};

for (let i = 0; i < n; i++) {
  let next = (i + 1) % n;
  let prev = (i + n - 1) % n;
  wheel[i] = { value: i + 1, prev: prev, next: next };
}

let beforeLocation = 0;
let location = 0;

function next() {
  return wheel[location].next;
}

let answer = [];
for (let j = 0; j < n; j++) {
  if (j != 0) {
    beforeLocation = location;
    for (let i = 0; i < k; i++) {
      if (i == 1) {
        wheel[wheel[beforeLocation].prev].next = wheel[beforeLocation].next;
        wheel[wheel[beforeLocation].next].prev = wheel[beforeLocation].prev;
        delete wheel[beforeLocation];
      }
      location = next();
    }
    answer.push(wheel[location].value);
  } else {
    for (let i = 1; i < k; i++) {
      location = next();
    }
    answer.push(wheel[location].value);
  }
}

console.log(`<${answer.join(', ')}>`);
