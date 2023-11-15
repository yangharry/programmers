let [nmv, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

let [n, m, v] = nmv.split(' ').map(Number);

function solution1(n, m, v) {
  let adjList = Array.from({ length: n + 1 }, () => []);
  let visited = Array(n + 1).fill(false);
  let answer = [];

  for (let i = 0; i < m; i++) {
    let [u, v] = inputs[i].split(' ').map(Number);
    adjList[u].push(v);
    adjList[v].push(u);
  }
  for (let i = 1; i <= n; i++) {
    adjList[i].sort((a, b) => {
      return a - b;
    });
  }

  function dfs(node) {
    visited[node] = true;
    answer.push(node);
    for (let e of adjList[node]) {
      if (!visited[e]) {
        dfs(e);
      }
    }
  }
  dfs(v);
  return answer.join(' ');
}

function solution2(n, m, v) {
  let adjList = Array.from({ length: n + 1 }, () => []);
  let visited = Array(n + 1).fill(false);
  const queue = [];
  let answer = [];

  for (let i = 0; i < m; i++) {
    let [u, v] = inputs[i].split(' ').map(Number);
    adjList[u].push(v);
    adjList[v].push(u);
  }
  for (let i = 1; i <= n; i++) {
    adjList[i].sort((a, b) => {
      return a - b;
    });
  }

  visited[v] = true;
  queue.push(v);
  answer.push(v);

  while (queue.length > 0) {
    const k = queue.shift();

    for (let e of adjList[k]) {
      if (!visited[e]) {
        visited[e] = true;
        queue.push(e);
        answer.push(e);
      }
    }
  }

  return answer.join(' ');
}

console.log(solution1(n, m, v));
console.log(solution2(n, m, v));
