/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var prompt = require('prompt-sync')();
let ticket = 800;
let age = parseInt(prompt("Enter your age: "));

if (age < 10) {
    console.log("free");
}
else {
    let student = prompt("Enter you a student: ").toUpperCase();
    if (age >= 60) {
        if (student === "YES") {
            let discount = ticket * (50 / 100);
            ticket -= discount;
            console.log(ticket);
        }
        else {
            let discount = ticket * (15 / 100);
            ticket -= discount;
            console.log(ticket);
        }
    }
    else if (student === "YES") {
        let discount = ticket * (50 / 100);
        ticket -= discount;
        console.log(ticket);
    }
    else {
        console.log(ticket);
    }
}
