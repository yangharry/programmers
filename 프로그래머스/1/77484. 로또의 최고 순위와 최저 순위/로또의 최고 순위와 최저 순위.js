function solution(lottos, win_nums) {
    var answer = [];
    let min = 0
    let zero = 0
    let object = {"0": 6 , "1": 6 , "2":5 , "3":4, "4":3 , "5":2 , "6":1 }
    lottos.map((e)=>{
        if(win_nums.includes(e)){
            min++
        }
        if(e == 0){
            zero++
        }
    })
    return [object[min+zero],object[min]];
}