function solution(array, commands) {
    var answer = [];
    commands.map((e)=>{
        let [i , j , k] = e;
        answer.push([...array.slice(i-1,j)].sort((a,b)=>a-b)[k-1])
    })
    return answer;
}