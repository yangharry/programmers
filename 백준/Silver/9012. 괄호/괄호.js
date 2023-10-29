const [n, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

let answer = [];
for (let i = 0; i < n; i++) {
  let a = input[i];
  let b = [];
  let d = true;
  for (let j = 0; j < a.length; j++) {
    let c = a[j];
    if (c == ')') {
      if (!b.length || b.pop() == ')') {
        d = false;
      }
    } else {
      b.push(c);
    }
  }
  if (!b.length && d) {
    answer.push('YES');
  } else {
    answer.push('NO');
  }
}

process.stdout.write(answer.join('\n'));
