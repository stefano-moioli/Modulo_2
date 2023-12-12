//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log("Let's see which is the greater number");

function whatIsGreater(number1, number2) {
  if(number1 > number2){
    return number1;
  } else if (number1 < number2){
    return number2;
  } else{
    return "numbers are equal";
  }
}

let result = whatIsGreater(44, 50); //esempio 
console.log(result);

result = whatIsGreater(400, 450);
console.log(result);

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

function numberSize(num){
  if(num < 5){
    return "Tiny";
  } else if(num < 10){
    return "Small";
  } else if(num < 15){
    return "Medium";
  } else if(num < 20){
    return "Large";
  } else{
    return "Huge";
  }
}

console.log(numberSize(3));
console.log(numberSize(5));
console.log(numberSize(13));
console.log(numberSize(17));
console.log(numberSize(200));

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for(let i = 0; i <= 10; i++){
  if(i === 3 || i === 8){
  continue;
  }
console.log(i);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for(let a = 0; a <= 15; a++){
  if(a % 2 === 0){
    console.log(a + " even");
  }else {
    console.log(a + " odd");
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function whereIsMyEight(number3, number4){
  if(number3 === 8 || number4 === 8){
    console.log("Hai trovato l'otto!");
  } else if(number3 + number4 === 8 || number3 - number4 === 8 || number4 - number3 === 8){
    console.log("Hai trovato un otto sommando o sottraendo i due numeri");
  } else{
    console.log("Mi dispiace, ritenta");
  }
}

let findTheEight = whereIsMyEight(8, 2);
findTheEight = whereIsMyEight(10, 2);
findTheEight = whereIsMyEight(12, 20);
findTheEight = whereIsMyEight(28, 27);


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

    /* let myShippingCart = 50;
     let totalShoppingCart

     if(myShippingCart < 50){
     totalShoppingCart = myShippingCart + 10;
    } else{
    totalShoppingCart = myShippingCart;
    }

    console.log(totalShoppingCart);
    +/


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let totalShippingCart = 53;
let discountedPrice = totalShippingCart*0.80;
let total

if(discountedPrice < 50){
  total = discountedPrice + 10;
} else{
  total = discountedPrice;
}

console.log(total);

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = false;

let gender = isMale? "Male" : "Female";
console.log("gender: " + gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/