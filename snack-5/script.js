// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

// Creo un array vuoto
var contenitoreNumeri = [];

// chiedo all'utente di inserire  un  numero per 6 volte
for (var i = 0; i < 6; i++) {
    var numero = parseInt (prompt("Inserisci un numero"));
    
    // se il numero è pari lo inserisco nel mio array
    if (numero%2 !== 0) {
        contenitoreNumeri.push(numero);
    }
}

// Stampo nell'html solo i numeri pari che ho inserito (il mio array)
document.getElementById("numeriDispari").innerHTML += contenitoreNumeri;



