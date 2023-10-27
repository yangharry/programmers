const [nk] = (require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt') + '')
  .trim()
  .split(/\r?\n/);

const [n, k] = nk.split(' ').map((e) => (e = +e));

const wheel = [];
for (let i = 1; i <= n; i++) {
  wheel.push(i);
}

let i = 0;
let answer = [];
while (wheel.length > 0) {
  i += k - 1;
  i %= wheel.length;
  answer.push(...wheel.splice(i, 1));
}

console.log(`<${answer.join(', ')}>`);
