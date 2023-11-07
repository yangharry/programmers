let [n, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');
if(n==1){
    console.log(0);
    return;
}
let tree = {};

inputs.forEach((input) => {
  const [from, to, distance] = input.split(' ').map(Number);
  if (!tree[from]) {
    tree[from] = [];
  }
  if (!tree[to]) {
    tree[to] = [];
  }
  tree[from].push({ to: to, distance: distance });
  tree[to].push({ from: from, distance: distance });
});

function dfs(start) {
  const visited = new Array(n + 1).fill(false);
  let maxDistance = 0;
  let maxNode = 0;

  function recursive(node, distance) {
    visited[node] = true;
    if (distance > maxDistance) {
      maxDistance = distance;
      maxNode = node;
    }

    tree[node].forEach((children) => {
      if (!visited[children.to || children.from]) {
        recursive(children.to || children.from, distance + children.distance);
      }
    });
  }

  recursive(start, 0);
  return { maxDistance, maxNode };
}

const { maxNode: result } = dfs(1);

const { maxDistance } = dfs(result);

console.log(maxDistance);
