const input = [];
const stack = [];
const result = [];

require('readline')
  .createInterface(process.stdin, process.stdout)
  .on('line', function (line) {
    input.push(Number(line.trim()));
  })
  .on('close', function () {
    //전위 순회 결과 배열의 시작, 끝 인덱스 삽입
    stack.push([0, input.length - 1]);
    while (stack.length) {
      const [start, end] = stack.pop();
      if (start > end) {
        continue;
      }

      //루트보다 큰 숫자들 중 가장 앞 숫자가 오른쪽 서브트리의 루트
      let pivot;
      for (let i = start + 1; i <= end; i++) {
        if (input[i] < input[start]) {
          continue;
        }
        pivot = i;
        break;
      }

      //오른쪽 서브트리가 존재할 때
      if (pivot) {
        //왼쪽 서브트리의 시작, 끝 인덱스 삽입
        stack.push([start + 1, pivot - 1]);
        //오른쪽 서브트리의 시작, 끝 인덱스 삽입
        stack.push([pivot, end]);
      } else {
        //루트 제외한 나머지 숫자들 삽입
        stack.push([start + 1, end]);
      }
      //result 배열의 처음에 루트 삽입
      //while문에서 이 과정 반복하면 후위 순회 결과 완성
      result.unshift(input[start]);
    }
    console.log(result.join('\n'));
  });