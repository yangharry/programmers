function solution(N, stages) {
    var answer = [];
    let map = new Map()
    for(let i = 1 ; i <= N+1 ; i ++){
        map.set(i,[0,0])
    }
    stages.map((e)=>{
        map.set(e,[map.get(e)[0]+1,map.get(e)[1]])
        for(let i = 1; i <= e ; i++){
            map.set(i,[map.get(i)[0],map.get(i)[1]+1])
        }
    })
    let result = []
    for(let i = 1 ; i <=N; i ++){
        let [a,b] = map.get(i)
        result.push([i, a/b])
    }
    result.sort((a,b)=> b[1] - a[1])
    result.map(([a,b])=>{
        answer.push(a)
    })
    return answer
}