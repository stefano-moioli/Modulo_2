/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

   /* Nonostante sia un linguaggio di programmazione debolmente tipizzato, e dunque non necessita la dichiarazione
   del tipo di dato nella variabile, Javascript possiede dei datatype.
   I suoi principali datatype sono 5 e vengono definiti "tipi di dato primitivi"; tra questi ci sono i 
   numeri, le stringhe i booleani, null e undefined. Javascrip possiede inoltre 
   un tipo di dato complesso, quello degli oggetti.
   I numeri, come da parola, sono rappresentati da entità numeriche, come "2", "33,3", e "-50". 
   Le stringhe sono invece rappresentate dai caratteri, e dunque da tutto ciò che è alfabetico e testuale, 
   composto da lettere, parole e simboli grammatici.
   I booleani sono invece dei tipi di dati che restituiscono una condizione vera ("true") o un condizione
   falsa ("false"). 
   Undefined e null sono infine due tipi di dato che, rispettivamente, riguardano la condizione
   predefinita di una variabile (dichiarata ma non ancora assegnata) e l'assegnazione manuale di
   un valore nullo ad una variabile.
   */ 

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

   /* Un oggetto Javascript è un'entità complessa, non nel senso di complicata, ma nel senso di
   articolata, che possiede più informazioni. In altre parole, è un'entità a cui vengono assegnate diverse proprietà. 
   Per esempio: all'entità "casa" possono essere assegnate diverse proprietà, come il numero di stanze,
   il colore dei muri e il luogo in cui si trova.
   */ 

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let addition = 12 + 20;

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Stefano";


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let subtraction = 4 - x;


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

let areTheyTheSame = (name1 === name2);
console.log(areTheyTheSame);
console.log(name1.toLowerCase() === name2.toLowerCase());

/* Crea un oggetto Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby)
*/

let myself ={
    name2: "Stefano",
    surname: "Moioli",
    hobbby: "writing",
};




