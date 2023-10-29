let [nk] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

let [n, k] = nk.split(' ').map(Number);
let a = [];
let answer = [];
for (let i = 0; i < n; ++i) {
  a.push(i + 1);
}
let j = 0;
while (a.length > 0) {
  j += k - 1;
  j %= a.length;
  answer.push(a.splice(j, 1)[0]);
}

process.stdout.write(`<${answer.join(', ')}>`);
