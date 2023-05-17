for (let i = 0 ; i < 10 ; i++) {
    const userRandom = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    const pcRandom = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    //console.log (userRandom);
    //console.log (pcRandom);
    if (userRandom > pcRandom){
        console.log ("You are the best")
    } else if (userRandom < pcRandom){
        console.log ("Pc always Winner")
    }
} 