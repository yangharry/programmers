function solution(board, moves) {
    var answer = 0;
    let lines = {}
    for(let i = board.length -1 ; i >= 0; i --){
        for(let j = 0 ; j < board[i].length; j++){
            if(!lines[j+1]){
                lines[j+1] = []
            }
            if(board[i][j]){
                lines[j+1].push(board[i][j])
            }
        }
    }
    let basket = []
    moves.map((e)=>{
       let doll = lines[e].pop()
       if(doll){
                 if(basket[basket.length - 1] === doll){
           answer += 2
           basket.pop()
       } else {
           basket.push(doll)
       } 
       }

    })
    return answer;
}