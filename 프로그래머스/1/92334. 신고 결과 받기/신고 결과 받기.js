function solution(id_list, report, k) {
    var answer = [];
    let 신고한사람 = {}
    let 신고당한사람 = {} 
    id_list.map((e)=>{
        신고한사람[e] = new Set()
        신고당한사람[e] = new Set()
    })
    
    report.map((e)=>{
        let [delator,defendant] = e.split(" ");
        신고당한사람[defendant].add(delator)
        신고한사람[delator].add(defendant)
    })
    
    id_list.map((a,i)=>{
        let result = 0;
        신고한사람[a].forEach((b)=>{
            if(신고당한사람[b].size >= k){
                result ++
            }
        })
        answer.push(result)
    })
    return answer;
}