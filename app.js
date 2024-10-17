const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Welcome ${username}, Let's start a journey`);


console.log(`You find a fork in the road`)
// first question 
const choice = prompt("Choose to go left or right? ");

// left path
 if (choice === "left") {
    // no spaces?
     console.log("you run into bandits.");
     const action = prompt("Do you fight or run? ");
 if (action === "fight") {
    console.log("You fought bravely and won! ");
     } else if (action === "run") {
        console.log("You escape saftely into the woods");
     } else {
        console.log("Invalid Action. You get caught and sent to the dungeon")
     }
     const promptTwo = require('prompt-sync')();
     const next = promptTwo("Do you set up Camp or continue? ")
     if (next === "camp") {
        console.log("You set up camp and are safe for the night ");
     } else if (next === "continue") {
        console.log("After a long journey you make it to the castle ");
     } else {
            console.log("Invalid Action. You die");
        }


// right path
 } else if (choice === "right") {
    console.log("You find a car.");
const action = prompt("Do you drive the car or keep walking?");
 if (action === "drive") {
 console.log("The car starts but there is less that 1/4 tank of gas.");
} else if (action === "walking") {
    console.log("You walk for 5 miles and it starts to get dark.");
} else {
    console.log("Invalid Action. A griffon flies in to eat you.");
}
 }else {
    console.log("Invalid Choice. choose left or right")
 }