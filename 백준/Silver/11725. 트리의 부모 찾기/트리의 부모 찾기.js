let [n, ...connections] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'ex0.txt')
  .toString()
  .split(process.platform === 'linux' ? '\n' : '\r\n');

n = Number(n);

const tree = {};
const parent = Array(n + 1).fill(0); // 부모 노드를 저장할 배열

// 트리 구성
connections.forEach((connection) => {
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
      // 이미 방문한 노드(부모 노드)는 제외
      dfs(child, node);
    }
  }
}

// 루트 노드부터 DFS 실행
dfs(1, 0);

// 결과 출력 (1번 노드는 루트이므로 제외)
const result = parent.slice(2).join('\n');
console.log(result);
