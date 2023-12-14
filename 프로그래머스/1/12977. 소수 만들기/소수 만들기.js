function solution(nums) {
    let result = []
    let n = nums.length;
    
    for(let i = 0 ; i < n - 2; i ++){
        for(let j = i + 1; j < n -1; j++){
            for(let k = j + 1; k < n; k++){
                result.push(nums[i]+nums[j]+nums[k])
            }
        }
    }
    
    
    let answer = 0
    
    for(let i = 0 ; i < result.length; i ++){
        if(isPrime(result[i])){
            answer++
        }
    }
    return answer;
}

function isPrime(number){
    if(number <=1) return false;
    if(number <=3) return true
    
    if(number%2 === 0) return false;
    for(let i = 3; i <= Math.sqrt(number); i+=2){
        if(number % i === 0) return false;
    }
    
    return true;
}