function solution(arr) {
    let min = Math.min(...arr);
    arr.splice(arr.findIndex(e=> e == min),1)
    return arr.length ? arr : [-1];
}