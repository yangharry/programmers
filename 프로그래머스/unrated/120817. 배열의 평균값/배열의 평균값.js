function solution(numbers) {
    let sum = numbers.reduce((prev,cur)=>{
        return prev + cur
    })
    return sum/numbers.length;
}