//età
let userAge = prompt('Conferma la tua età');
console.log(userAge + ' anni')

//lunghezza tratta in km
let voyageLength = prompt('Inserire il numero di km che si intende percorrere');
voyageLength = parseInt(voyageLength)
console.log(voyageLength + ' Km')

//prezzo biglietto (0.21€/km)
const price = 0.21;
//console.log(price)

//calcolo prezzo del biglietto
let flatPrice = price * voyageLength;
//console.log(flatPrice1 + '€')

//sconti (age<18 = -20%; age>65 = -40%)
let discount = 0
if(userAge<18){
discount= 0.2
} else if (userAge>65){
discount = 0.4
}

//prezzo finale (max 2 decimali, es: 29.90€)
const finalPrice = flatPrice - flatPrice*discount
console.log(finalPrice.toFixed(2), finalPrice)

//comunicazione front end con html
const shownPrice = document.getElementById('finalPrice')
shownPrice.innerHTML = 'Il prezzo del tuo biglietto è di: ' + finalPrice.toFixed(2) + ' &euro;'

const showDiscount = document.getElementById('totalDiscount')
showDiscount.innerHTML = '(Sconto totale ricevuto: ' + discount.toFixed(2) + ' &euro;)'