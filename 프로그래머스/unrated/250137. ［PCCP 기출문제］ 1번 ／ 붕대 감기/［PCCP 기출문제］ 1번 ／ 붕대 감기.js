function solution(bandage, health, attacks) {
    var answer = 0;
    let lastTime = attacks[attacks.length -1][0];
    let boostTime = 0;
    let objectAttacks = {}
    let hp = health
    attacks.map(([a,b])=>{
        objectAttacks[a] = b
    })
    for(let i = 1; i <= lastTime; i++){
        let damage = objectAttacks[i]
        if(damage){
            hp -= damage;
            boostTime = 0;
            if(hp <= 0){
                break;
            }
        } else {
            if(hp + bandage[1] < health){
                 boostTime ++
                 if(boostTime == bandage[0]){
                       hp += (bandage[1] + bandage[2]) 
                       boostTime = 0
                  } else {
                        hp +=  bandage[1]    
                  }
              } else {
                 hp = health
              }
        }
    }
    return hp <= 0 ? -1 : hp
}