function solution(absolutes, signs) {
    var answer = 0
    absolutes.map((e,i)=>{
    if(signs[i]){
      answer += e                  
     } else {
      answer -= e
     }
    })
    return answer;
}