function solution(a, b) {
    let day = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let month = [31,29,31,30,31,30,31,31,30,31,30,31]
    let totalDay = b;
    for(let i = 0 ; i < a - 1; i++){
        totalDay += month[i] 
    }
    
    return day[(totalDay + 4)%7];
}