/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(number1, number2){
    let sum = number1 + number2;
    if(number1 === number2){
        return sum*3;
    }else{
        return sum;
    }
}

console.log(crazySum(10, 10)); // Esempio


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(intNumber){
   if(intNumber <= 100 && intNumber>= 20 || intNumber === 400){
    return true;
   }else{
    return false;
   }
}

console.log(boundary(100));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/


function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("Questa frase è palindroma"));


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(inputString){
    let words = inputString.split(' ');
    let result = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return result.join(' ');
}

let input = "metti in maiuscolo ogni parola";
let output = upperFirst(input);

console.log(output);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n){
    let randomArray = [];
    for(i = 0; i < n; i++){
        let randomNumber = Math.floor(Math.random() * 11);
        randomArray.push(randomNumber);
    }

    return randomArray;
}

let myRandomArray = giveMeRandom(3);
console.log(myRandomArray);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2){
    let areaRettangolo = l1*l2;
    return areaRettangolo;
}

console.log(area(4, 6));


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(numberX){
    let diff = numberX - 19;
    if(diff>19){
        return diff*3;
    }else{
        return diff;
    }
}

console.log(crazyDiff(50));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(newString){
    
}

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(newNumber){
    if(newNumber%3 === 0 || newNumber%7 === 0){
        return true;
    }else{
        return false;
    } 
}

console.log(check3and7(28));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
