let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

let currentLine = 0;

function readLine() {
  return input[currentLine++];
}

function isTree(adjList, visited, node) {
  let queue = [[node, -1]];
  visited[node] = true;

  while (queue.length > 0) {
    let [current, parent] = queue.shift();

    for (let neighbor of adjList[current]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push([neighbor, current]);
      } else if (neighbor !== parent) {
        // 사이클 발견
        return false;
      }
    }
  }

  return true;
}

function countTrees() {
  let caseNum = 1;
  while (true) {
    let [n, m] = readLine().split(' ').map(Number);
    if (n === 0 && m === 0) break;

    let adjList = Array.from({ length: n + 1 }, () => []);
    let visited = new Array(n + 1).fill(false);
    let treeCount = 0;

    for (let i = 0; i < m; i++) {
      let [u, v] = readLine().split(' ').map(Number);
      adjList[u].push(v);
      adjList[v].push(u);
    }

    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        if (isTree(adjList, visited, i)) {
          treeCount++;
        }
      }
    }

    if (treeCount === 0) {
      console.log(`Case ${caseNum}: No trees.`);
    } else if (treeCount === 1) {
      console.log(`Case ${caseNum}: There is one tree.`);
    } else {
      console.log(`Case ${caseNum}: A forest of ${treeCount} trees.`);
    }

    caseNum++;
  }
}

countTrees();
