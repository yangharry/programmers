function solution(strings, n) {
    strings.sort()
    strings.sort((a,b)=>{
       return a[n].charCodeAt(0) - b[n].charCodeAt(0)
    })
    return strings;
}