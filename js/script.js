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

//creamo una lista di mail
const mailList =
 [  "antonio@google.com",
    "cosimo@google.com",
    "giuseppe@goole.com",
    "francesco@google.com",
    "simona@goolge.com",
 ]
const personalMail = prompt("Please enter your mail");
let isMailFound = false;

for (let i = 0; i < mailList.length ; i++) {
    if  ( mailList [i] === personalMail ){
        isMailFound = true;
    }
}


if ( isMailFound === true){
    console.log ("Good to go");
} else {
    console.log ("Get out");
}