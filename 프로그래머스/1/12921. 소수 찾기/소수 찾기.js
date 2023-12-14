function solution(n) {
    var answer = 0;
    for(let i = 2; i <= n; i++){
        if(isPrime(i)){
            answer ++
        }
    }
    return answer;
}

function isPrime(number){
    if(number <= 1 ) return false;
    if(number <= 3 ) return true;
    
    if(number % 2 === 0) return false;
    for(let i = 3 ; i <= Math.sqrt(number); i+=2){
        if(number % i === 0) return false;
    }
    
    return true;
}