function solution(price, money, count) {
    var answer = money;
    
    for(let i = 1 ; i<= count; i++ ){
        answer -= price*i
    }

    return answer < 0 ? -answer : 0 ;
}