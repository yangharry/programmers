let [n, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

n = Number(n);

const tree = {};
const parent = Array(n + 1).fill(0); 

input.forEach((connection) => {
  const [a, b] = connection.split(' ').map(Number);
  if (!tree[a]) tree[a] = [];
  if (!tree[b]) tree[b] = [];
  tree[a].push(b);
  tree[b].push(a);
});

function dfs(node, parentOfNode) {
  parent[node] = parentOfNode;
  for (const child of tree[node]) {
    if (child !== parentOfNode) {
     
      dfs(child, node);
    }
  }
}


dfs(1, 0);

const result = parent.slice(2).join('\n');
console.log(result);
