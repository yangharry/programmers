const fs = require('fs');
let [nk] = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .trim()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

var [n, k] = nk.split(' ').map(Number);

var a = [];
var answer = [];
for (var i = 0; i < n; ++i) {
  a.push(i + 1);
}
var j = 0;
while (a.length > 0) {
  j += k - 1;
  j %= a.length;
  answer.push(a.splice(j, 1)[0]);
}

process.stdout.write(`<${answer.join(', ')}>`);
