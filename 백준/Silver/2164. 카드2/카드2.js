let n = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .trim()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

let d = n;
let m = 1;

while (d > 1) {
  d /= 2;
  m *= 2;
}

console.log(2 * (n - m / 2));
