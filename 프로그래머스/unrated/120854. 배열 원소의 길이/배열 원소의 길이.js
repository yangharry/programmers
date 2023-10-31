function solution(strlist) {
    var answer = [];
    strlist.map((e,i)=>{
        answer[i] = e.length
    })
    return answer;
}