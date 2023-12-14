function solution(nums) {
    let a = [...new Set(nums)].length
    let b = Math.floor(nums.length/2)
    return a < b ? a : b ;
}