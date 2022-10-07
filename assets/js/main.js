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

    //  ask name
    const userName = document.getElementById("userName").value;

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

        document.getElementById(`ticket_name`).innerHTML = `${userName}`;

    } else if (userAge >= 65) {

        document.getElementById(`ticket_price`).innerHTML = ((ticketFullPrice - discountOver).toFixed(2) + " €");

        document.getElementById(`discount_message`).innerHTML = "You are over 65s and are entitled to 40% discount";

        document.getElementById(`ticket_name`).innerHTML = `${userName}`;

    } else {

        document.getElementById(`ticket_price`).innerHTML = (ticketFullPrice.toFixed(2) + " €");

        document.getElementById(`discount_message`).innerHTML = "Based on your age you are not entitled to discounts";

        document.getElementById(`ticket_name`).innerHTML = `${userName}`;

    }

    }
}
)


