function solution(X, Y) {
    var answer = '';
    let commonNum = []
    let objectX = X.split('').reduce((acc,cur)=>{
        return (acc[cur] = (acc[cur] || 0) + 1), acc
    },{})
    let objectY = Y.split('').reduce((acc,cur)=>{
        return (acc[cur] = (acc[cur] || 0) + 1), acc
    },{})

    for(let i = 9; i >= 0; i --){
      const index = i.toString();
      if(!objectX[index]) continue;
      if(!objectY[index]) continue;

      const num = Math.min(objectX[index], objectY[index])
      answer += index.repeat(num)
    }
    if(answer.length === 0) return "-1"
    if(answer[0] === "0" ) return "0";
    return answer;

   
}