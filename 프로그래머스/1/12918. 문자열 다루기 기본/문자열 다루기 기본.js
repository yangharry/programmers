function solution(s) {
    if(s.length == 4 || s.length == 6){
        return s.replace(/[0-9]/g,'').length == 0 ? true : false;
    } else {
        return false;
    }
}