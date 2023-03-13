/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.



Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.


Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:

Che ci sia un array da qualche parte?

Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

//variabili

const mailOutputEl = document.querySelector(".email_output");

const playerNumberOutput = document.querySelector(".playerOutput")

const pcNumberOutput = document.querySelector(".pcOutput")

let diceResult = document.querySelector(".dice_result")

// seleziono l'input #send mail tramite querySelector

const mailEl = document.querySelector("#send_mail");
console.log(mailEl.value);

//seleziono il bottone e gli associo un event listener al click

const sendButtonEl = document.querySelector(".send_btn");
console.log("button on")



//eventListener

sendButtonEl.addEventListener('click', function(){
    console.log(mailEl.value);

    const mailValue = mailEl.value;

        mailOutputEl.insertAdjacentHTML("afterend", mailValue);
        console.log("checked")
        
    
 // stampo in pagina
    
   
})

/* DICE GAME */

//creo la lista dei giocatori

//aggiungo un bottone per iniziare il gioco

//quando clicco il bottone verranno generati due numeri ; quello per il giocatore e quello per il computer

//stampo a scehrmo i numeri

//il numero più alto vince e lo verifico con una condizione, se il numero del giocatore è più alto allora mostra a schermo hai vinto, altrimenti mostra hai perso.

const playerListEl = [
    'computer',
    'player'
]

const btnPlay = document.querySelector(".start_game");
console.log(btnPlay, "button-on")

//event listener bntPlay


btnPlay.addEventListener('click', function(){
    const playerNumber = Number(Math.floor(Math.random() * 6))
    console.log(playerNumber, 'dice-result')
    playerNumberOutput.insertAdjacentHTML("beforeend", playerNumber)

    const computerNumber = Number(Math.floor(Math.random() * 6))
    console.log(computerNumber, 'dice-result-pc')
    pcNumberOutput.insertAdjacentHTML("beforeend", computerNumber)

    if (playerNumber < computerNumber){
        diceResult.insertAdjacentHTML("beforeend", `<p class="text-center mt-5 border-1 rounded-1 result_style">${"Hai Perso!"}</p>`)
    }

    else if (playerNumber === computerNumber){
        diceResult.insertAdjacentHTML("beforeend", `<p class="text-center mt-5 border-1 rounded-1 result_style">${"Pareggio!"}</p>`)
    }

    
    else {
        diceResult.insertAdjacentHTML("beforeend", `<p class="text-center mt-5 border-1 rounded-1 result_style">${"Hai Vinto!"}</p>`)
    }
})