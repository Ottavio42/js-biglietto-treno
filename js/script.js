var km = prompt("Inserisci kilometri da percorrere:");
var eta = prompt("Inserisci la tua età:");
var prezzoUni = km * 0.21


if (eta < 18) {
    var prezzo = ( prezzoUni / 100 ) * 80;
  } else if (eta < 65) {
    var prezzo = ( prezzoUni / 100 ) * 60 ;
  } else {
    var prezzo = prezzoUni;
  }

document.getElementById("biglietto").innerHTML = "Il costo del biglietto è: " + prezzo + "€";





// STILE
document.getElementById('biglietto').style.backgroundColor = "#d21f1b";
document.getElementById('biglietto').style.color = "#aea04b";
document.getElementById("biglietto").style.display = "inline-block";
document.getElementById('biglietto').style.fontSize='80px'