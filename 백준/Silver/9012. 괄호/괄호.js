const [n, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

let answer = [];
for (let i = 0; i < n; i++) {
  let a = input[i];
  while (true) {
    if (a.indexOf('()') == -1) {
      if (a.length == 0) {
        answer.push('YES');
        break;
      } else {
        answer.push('NO');
        break;
      }
    } else {
      a = a.replaceAll('()', '');
    }
  }
}

console.log(answer.join('\n'));
