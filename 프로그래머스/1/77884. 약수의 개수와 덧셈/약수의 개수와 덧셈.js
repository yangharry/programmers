function solution(left, right) {
    var answer = 0;
    function solution(num){
        let divisors = [];
        for(let i = 1; i <= Math.sqrt(num); i++){
            if(num % i == 0){
                divisors.push(i);
                if(num / i != i ) divisors.push(num/i)
            }
        }
        return divisors.length;
    }
    
    for(let i = left ; i <= right; i++ ){
        if(solution(i) % 2 == 0){
            answer += i
        } else {
            answer -= i
        }
    }
    
    return answer
}