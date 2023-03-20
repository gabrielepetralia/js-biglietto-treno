const km = prompt("Inserisci il numero di km che vuoi percorrere")
const age = prompt("Inserisci la tua età")
const prezzoAlKm = 0.21;

let prezzoTot = prezzoAlKm * km;

if(age < 18) prezzoTot = prezzoTot - ((20/100)*prezzoTot);
if(age > 65) prezzoTot = prezzoTot - ((40/100)*prezzoTot);

document.getElementById("prezzoBiglietto").innerHTML += `
  ${prezzoTot.toFixed(2)} &euro;
`