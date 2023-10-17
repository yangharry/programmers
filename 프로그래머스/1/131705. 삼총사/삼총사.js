function getCombinations(arr, k) {
  const result = [];

  function combine(cur, start) {
    if (cur.length === k) {
      result.push([...cur]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      cur.push(arr[i]);
      combine(cur, i + 1);
      cur.pop();
    }
  }

  combine([], 0);
  return result;
}

function solution(number) {
    var answer = 0;
    const combinations = getCombinations(number,3)
    combinations.forEach((e)=>{
        let sum = 0
        e.forEach((el)=>{
            sum += el
        })
        if(sum == 0){
            answer ++
        }
    })
    return answer;
}