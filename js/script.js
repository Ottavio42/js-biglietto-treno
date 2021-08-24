var km = parseInt(prompt("Inserisci kilometri da percorrere:"));
var eta = parseInt(prompt("Inserisci la tua età:"));
var prezzo = km * 0.21


if (eta < 18) {
    var sconto = prezzo * 0.20;
    prezzo -= sconto;
  } else if (eta < 65) {
    var sconto = prezzo * 0.40 ;
    prezzo -= sconto;
  } else {
    var prezzo = prezzo;
  }

document.getElementById("biglietto").innerHTML = "Il costo del biglietto è: " + prezzo.toFixed(2) + "€";





// STILE
document.getElementById('biglietto').style.backgroundColor = "#d21f1b";
document.getElementById('biglietto').style.color = "#aea04b";
document.getElementById("biglietto").style.display = "inline-block";
document.getElementById('biglietto').style.fontSize='80px'