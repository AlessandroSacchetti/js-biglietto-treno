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
let flatPrice1 = price * voyageLength;
//console.log(flatPrice1 + '€')

//sconti (age<18 = -20%; age>65 = -40%)
let discountUnderage1 = (flatPrice1 * 20) / 100;
//console.log(discountUnderage1)

let discountOverage1 = (flatPrice1 * 40) / 100;
//console.log(discountOverage1)

//prezzo finale (max 2 decimali, es: 29.90€)

if (userAge < 18) {
    console.log('Il prezzo totale del biglietto è di: ' + flatPrice1 - discountUnderage1 + '€');
} else if (userAge > 65) {
    console.log('Il prezzo totale del biglietto è di: ' + flatPrice1 - discountOverage1 + '€');
} else {
    console.log('Il prezzo totale del biglietto è di: ' + flatPrice1 + '€');
}