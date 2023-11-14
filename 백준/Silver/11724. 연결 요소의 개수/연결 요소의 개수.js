let [nm, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

function dfs(node, adjList, visited) {
  visited[node] = true;
  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor, adjList, visited);
    }
  }
}

let [n, m] = nm.split(' ').map(Number);

let adjList = Array.from({ length: n + 1 }, () => []);
let visited = Array(n + 1).fill(false);
let answer = 0;

for (let i = 0; i < m; i++) {
  let [u, v] = inputs[i].split(' ').map(Number);
  adjList[u].push(v);
  adjList[v].push(u);
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i, adjList, visited);
    answer++;
  }
}

console.log(answer);
