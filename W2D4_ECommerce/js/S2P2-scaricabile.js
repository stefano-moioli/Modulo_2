// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!

let totKart = 0;
let totUser


for(i = 0; i < prices.length; i++){
  totKart += prices[i];
}
  if(utenteCheEffettuaLAcquisto.isAmbassador === true){
    totKart *= 0.70; 
      console.log("Complimenti, hai ottenuto uno sconto del 30%, il totale del tuo carrello è ora di " + totKart + "$");
    }else {
      "Mi dispiace, non hai ottenuto lo sconto del 30%"
    }
    
    if(totKart < 100){
      totUser = totKart + shippingCost;
      console.log("Grazie per il tuo acquisto. Con le spese di spedizione andrai a pagare un totale di " + totUser + "$");
    }else{
      totUser = totKart;
      console.log("Grazie per il tuo acquisto. Avendo superato i 100$ di spesa, ti regaliamo le spese di spedizione. Il costo totale è di " + totUser + "$");
    }

    let users = [];
    let onlyAmbassador = [];

    users.push(marco, paul, amy);

    console.log("Vediamo se il nostro utente è un ambassador");

    users.map(user =>{
      if(user.isAmbassador){
        console.log(user.name + " " + user.lastName + " è un ambassador");
        onlyAmbassador.push(user); // qui pusho l'utente ambassador nell'array a loro riservato
      }else{
        console.log(user.name + " " + user.lastName + " non è un ambassador");
      }
    })

    
















