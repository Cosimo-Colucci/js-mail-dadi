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

 //creazione pront per chiedere all'utente la propria mail
 const personalMail = prompt("Please enter your mail")

 //con questo if gli diciamo al codice di prendere il valore inserito all'interno del prompt dall'utente e confrontarlo con i valori della lista 
 if (personalMail.value == mailList.value){
    console.log ("You are in")
 }