    function gcd(a,b){
        while(b != 0){
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    function lcm(a,b){
        return (a*b)/gcd(a,b)
    }

function solution(n, m) {
    var answer = [];
    
    let gcdResult = gcd(n,m)
    let lcmResult = lcm(n,m)
    
    answer.push(gcdResult)
    answer.push(lcmResult)
    
    return answer;
}