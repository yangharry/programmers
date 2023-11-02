let [n, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

n = Number(n);
let tree = {};

for (let i = 1; i <= n; i++) {
  tree[i] = { parent: null, children: [] };
}

for (let i = 0; i < n - 1; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  tree[a].children.push(b);
  tree[b].children.push(a);
}
function asdf(i) {
  let children = tree[i].children;
  for (let j = 0; j < children.length; j++) {
    tree[children[j]].parent = i;
    tree[children[j]].children = tree[children[j]].children.filter((e) => e != i);
    asdf(children[j]);
  }
}

asdf(1);

let answer = [];
for (let i = 2; i <= n; i++) {
  answer.push(tree[i].parent);
}

console.log(answer.join('\n'));
