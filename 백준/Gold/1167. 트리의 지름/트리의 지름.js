let [n, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

n = Number(n);
if (n == 1) {
  console.log(0);
  return;
}

let tree = [];

inputs.forEach((input) => {
  let [node, ...numbers] = input.split(' ').map(Number);
  for (let i = 0; i < numbers.length - 1; i += 2) {
    if (!tree[node]) {
      tree[node] = [];
    }
    if (!tree[numbers[i]]) {
      tree[numbers[i]] = [];
    }
    tree[node].push({ node: numbers[i], distance: numbers[i + 1] });
    tree[numbers[i]].push({ node: node, distance: numbers[i + 1] });
  }
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
      if (!visited[children.node]) {
        recursive(children.node, distance + children.distance);
      }
    });
  }

  recursive(start, 0);
  return { maxDistance, maxNode };
}

const { maxNode: result } = dfs(1);

const { maxDistance } = dfs(result);

console.log(maxDistance);
