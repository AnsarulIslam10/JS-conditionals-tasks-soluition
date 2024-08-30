/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
var prompt = require('prompt-sync')();
let burger = parseInt(prompt("Burger Price: "));
let coke = 30;
if (burger > 500) {
    coke = 0;
    console.log('free coke');
    console.log("total cost: ", burger + coke);
} else {
    console.log("coke price: ", coke);
    console.log("total cost: ", burger + coke);
}