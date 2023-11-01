function solution(s1, s2) {
    var answer = 0;
    s1.map(e=>{
        if(s2.indexOf(e) != -1){
            answer ++
        }
    })
    return answer;
}