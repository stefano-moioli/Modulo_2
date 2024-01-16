// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

const myTitle = document.querySelector("h1");
const bodyPage = document.querySelector("body");
const productLinks = document.querySelectorAll("a");
const imgProducts = document.querySelectorAll("img");
const buttonPrice = document.querySelectorAll("button");

function transformTitle(){
    myTitle.textContent = "Bookshop 2.0";
}
transformTitle();

function transformBgColor(){
    bodyPage.style.backgroundColor = "lightblue";
}
transformBgColor();

function changeAddress(){
    productLinks.forEach(function(link){
    link.href = "https://www.ebay.com";
    })
}
changeAddress()

function addCssClasstoA(){
    productLinks.forEach(function(aClass){
        aClass.classList.add("linkClass");
    })
}
addCssClasstoA();

function addRemoveClassVisibilityToImg(){
    imgProducts.forEach(function(imgProduct){
    imgProduct.classList.toggle("visibility");    
    })
}

addRemoveClassVisibilityToImg(); //Chiamando la funzione la prima volta, la classe "visibility" viene aggiunta perché le img non hanno ancora questa classe.
addRemoveClassVisibilityToImg(); //Chiamando la funzione la seconda volta, la classe "visibility" viene rimossa perché le img, dopo l'iterazione della prima funzione, hanno la classe "visibility".

function changeColorPrice(){
  let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  buttonPrice.forEach(function(colorPrice){
    colorPrice.style.color = randomColor;
  })
}