function solution(s) {
    var answer = '';
    let splitedS = s.split(" ");
    for(let i = 0; i < splitedS.length; i++){
        splitedS[i].split('').map((e,i)=>{
            if(i % 2 === 0){
                answer += e.toUpperCase()
            } else {
                answer += e.toLowerCase()
            }
        })
        if(i != splitedS.length -1){
            answer += " "
        }
    }
    return answer;
}