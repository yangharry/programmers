function solution(N, stages) {
    let answer = [];
    for(let i = 1 ; i <= N ; i ++){
        let denominator = stages.filter((e)=> e >= i).length;
        let molecule = stages.filter((e)=> e === i).length;
        answer.push([i,molecule/denominator])
    }
    answer.sort((a,b)=> b[1] - a[1])
    return answer.map((e)=> e[0])
}