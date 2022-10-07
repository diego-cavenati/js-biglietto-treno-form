/*************************
 calculate ticket price
**************************/

// defined userClick in the document via ID
const userClick = document.getElementById("user_click")

// event triggering the calculation of the ticket
userClick.addEventListener("click", function() {
    // 1 - ask the user the number of kilometres he/she wants to travel
    const userKm = document.getElementById("userKm").value;

    // 2 - ask the user age
    const userAge = document.getElementById("userAge").value;

    // 3 - calculate the total price of the trip:
    // ticket price is defined according to km (0.21 € per km)
    const priceKm = 0.21;

    // ticket price without discounts
    const ticketFullPrice = priceKm * userKm;

    // 20% discount for minors
    const discountMinors = (ticketFullPrice / 100) * 20;

    // 40% discount for the over 65s
    const discountOver = (ticketFullPrice / 100) * 40;


    // The output final price with a maximum of two decimal
    // number validation
    if (isNaN(userKm) || isNaN(userAge)) {
        
        alert(" is not a number");
        document.getElementById(`ticket_price`).innerHTML = "try again and enter numbers this time";

    } else {

    if (userAge <= 18) {

        document.getElementById(`ticket_price`).innerHTML = ((ticketFullPrice - discountMinors).toFixed(2) + " €");

        document.getElementById(`discount_message`).innerHTML = "You are a minor and are entitled to 20% discount";

    } else if (userAge >= 65) {

        document.getElementById(`ticket_price`).innerHTML = ((ticketFullPrice - discountOver).toFixed(2) + " €");

        document.getElementById(`discount_message`).innerHTML = "You are over 65s and are entitled to 40% discount";

    } else {

        document.getElementById(`ticket_price`).innerHTML = (ticketFullPrice.toFixed(2) + " €");

        document.getElementById(`discount_message`).innerHTML = "Based on your age you are not entitled to discounts";

    }

    }
}
)



/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console. */


// const userKm = Number(prompt("how many kilometres do you want to cover?"));
// const userKm = document.getElementById("userKm").value;
// console.log(userKm);
// const userAge = Number(prompt("How old are you?"));


// if (isNaN(userKm) || isNaN(userAge)) {
    
//     alert(" is not a number");
//     document.getElementById(`ticket_price`).innerHTML = "try again and enter numbers this time";

// } else { // The output final price with a maximum of two decimal

//     if (userAge <= 18) {

//         document.getElementById(`ticket_price`).innerHTML = ((ticketFullPrice - discountMinors).toFixed(2) + " €");

//         document.getElementById(`discount_message`).innerHTML = "You are a minor and are entitled to 20% discount";

//     } else if (userAge >= 65) {

//         document.getElementById(`ticket_price`).innerHTML = ((ticketFullPrice - discountOver).toFixed(2) + " €");

//         document.getElementById(`discount_message`).innerHTML = "You are over 65s and are entitled to 40% discount";

//     } else {

//         document.getElementById(`ticket_price`).innerHTML = (ticketFullPrice.toFixed(2) + " €");

//         document.getElementById(`discount_message`).innerHTML = "Based on your age you are not entitled to discounts";

//     }
// }
