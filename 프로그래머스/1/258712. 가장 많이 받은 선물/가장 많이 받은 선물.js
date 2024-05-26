function solution(friends, gifts) {
    const givenGifts = {};
    const receivedGifts = {};
    const exchangeRecords = {};
    
    friends.forEach((friend) => {
        givenGifts[friend] = 0;
        receivedGifts[friend] = 0;
        exchangeRecords[friend] = {};
        friends.forEach(f => {
            if(friend !== f){
                exchangeRecords[friend][f] = 0;
            }
        })
    })
    
    gifts.forEach((gift) => {
        const [giver,receiver] = gift.split(' ');
        givenGifts[giver] += 1;
        receivedGifts[receiver] += 1;
        exchangeRecords[giver][receiver] +=1;
    })
    
    const nextReceived = {};
    friends.forEach((friend) => {
        nextReceived[friend] = 0;
    })

  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const giver = friends[i];
      const receiver = friends[j];
      const giftsGiven = exchangeRecords[giver][receiver];
      const giftsReceived = exchangeRecords[receiver][giver];

      if (giftsGiven > giftsReceived) {
        nextReceived[giver] += 1;
      } else if (giftsGiven < giftsReceived) {
        nextReceived[receiver] += 1;
      } else {
        const giverGiftIndex = givenGifts[giver] - receivedGifts[giver];
        const receiverGiftIndex = givenGifts[receiver] - receivedGifts[receiver];
        if (giverGiftIndex > receiverGiftIndex) {
          nextReceived[giver] += 1;
        } else if (giverGiftIndex < receiverGiftIndex) {
          nextReceived[receiver] += 1;
        }
      }
    }
  }
    
    let maxGifts = 0;
    
    friends.forEach((friend)=>{
        if(nextReceived[friend] > maxGifts){
            maxGifts = nextReceived[friend];
        }
    })
    
    return maxGifts;
}