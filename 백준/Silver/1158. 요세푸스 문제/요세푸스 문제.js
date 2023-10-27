var [nk] = (require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt') + '')
  .trim()
  .split(/\r?\n/);

var [n, k] = nk.split(' ').map((e) => (e = +e));

var x = [];
var a = [];
for (var i = 0; i < n; ++i) {
  x.push(i + 1);
}
var t = 0;
while (x.length > 0) {
  t += k - 1;
  t %= x.length;
  a.push(x.splice(t, 1)[0]);
}

console.log(`<${a.join(', ')}>`);
