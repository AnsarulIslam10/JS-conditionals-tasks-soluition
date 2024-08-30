/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
var prompt = require('prompt-sync')();
let yourScore = prompt("Enter your score: ");
let friendsScore = prompt("Enter your friends score: ");

if (yourScore > 80) {
    if (friendsScore > 80) {
        console.log("go for a lunch");
    }
    else if (friendsScore < 80 && friendsScore >= 60) {
        console.log("good luck next time");
    }
    else if (friendsScore < 60 && friendsScore >= 40) {
        console.log("message unseen");
    }
    else if (friendsScore < 40) {
        console.log("block");
    }
}
else {
    console.log("go to home and sleep and act sad");
}