let humanScore = 0;
let computerScore = 0;

// DECLARING ARRAY AND COMPUTER'S CHOICE. RANDOMIZING COMPUTER SELECTION. LOGGING RESULT TO CONSOLE.
const myArray = ["rock", "paper", "scissors"];
let computerSelection = myArray [Math.floor(Math.random() * myArray.length)];







//Can we return a text value from user input?
//REMEMBER: ALL THIS FUNCTION DOES IS DISPLAY
//Declare function
function myFunction() {

//Declare variable for x. I told it to go grab the myText stuff. idk what value is
  let x = document.getElementById("myText").value;

// CHANGING INPUT TO LOWERCASE
  let goodHumanSelection = x.toLowerCase();

computerSelection = myArray [Math.floor(Math.random() * myArray.length)];

//Grab the anchor element. Tell it I'm going to fuck with the innerHTML. The value I put there will be X.
document.getElementById("demo").innerHTML = "You selected: " + goodHumanSelection + ". Computer selected: " + computerSelection + ".";
console.log(x);

selectWinner(computerSelection, goodHumanSelection);
function selectWinner(computerSelection, goodHumanSelection) {



// GIVE FALSE RESULT IF INPUT IS NOT CORRECT

  if (goodHumanSelection != "rock" &&
    goodHumanSelection != "paper" &&
    goodHumanSelection != "scissors") {
    console.log("Result: you did it wrong");
    document.getElementById("winner").innerHTML ="Result: you did it wrong";

// COMPARE VALID SELECTIONS
  } else if (computerSelection == goodHumanSelection) {
    console.log("Result: tie");
    document.getElementById("winner").innerHTML ="Result: tie";
    document.getElementById("humanScore").innerHTML ="Your score: " + humanScore;
    document.getElementById("computerScore").innerHTML ="Computer score: " + computerScore;
  } else if (
    (computerSelection == "rock" && goodHumanSelection == "scissors") ||
    (computerSelection == "scissors" && goodHumanSelection == "paper") ||
    (computerSelection == "paper" && goodHumanSelection == "rock")
  ) {
    console.log("Result: you lose");
    document.getElementById("winner").innerHTML ="Result: you lose";
    document.getElementById("humanScore").innerHTML ="Your score: " + humanScore;
    document.getElementById("computerScore").innerHTML ="Computer score: " + (computerScore += 1);
  } else {
    console.log("Result: you win");
    document.getElementById("winner").innerHTML ="Result: you win";
    document.getElementById("humanScore").innerHTML ="Your score: " + (humanScore += 1);
    document.getElementById("computerScore").innerHTML ="Computer score: " + computerScore;
  }
}


if (humanScore == 3) {
  document.getElementById("winnerBox").innerHTML = "You WIN!";
  document.getElementById("button").innerHTML = "YOU WON";



} else {
  let newValue = false;
  console.log(newValue)
  document.getElementById("scoreKeeper").innerHTML = score;
  console.log(score);
}



}




//OFFERS LINK TO REFRESH PAGE

let linkText = "Wanna go again?";
let after = linkText.link("https://ameliaeiger.github.io/pages/rps");
document.getElementById("link").innerHTML = after;


// WHAT I KIND OF THINK I HAVE TO DO
// 1. Establish an array with the strings: 'rock', 'paper', 'scissors'
// 2. Randomly select one item from the array
// 3. Compare computerPlay vs playerSelection
// 4. Evaluate results and return correlating string message

// WHAT I REALLY DID
// 1. Declare variable for array (myArray). Assign array values.
// 2. Declare variable for computer selection (computerSelection). Assign value as function to randomize string return value.
//    from my array (myArray)
// 3. Declare variable for human input (humanSelection)
// 4. In creating the function, be sure to assign placeholder values for whatever reason.
// 5. Wrote the function to determine victor (selectWinner)
// 6. Wrote comparisons of different outcomes. Those are nested.
// *. Right now, the console will log the result.

// For some reason, this has to be here first otherwise none of this works. Apparently
// the element doesn't exist yet because it hasn't been added to the DOM? idk
//window.onload = function() {
//  document.getElementById("result").innerHTML = text;
//}
// DECLARING HUMAN INPUT
//let greeting = "Choose rock, paper, or scissors.";
//let humanSelection = document.addEventListener("click",)
//console.log(humanSelection);



// GRAB HUMANSELECTION INPUT
//function grabbingInput() {
//  return prompt(greeting);
//}








//***EXPERIMENT***
function tallyScore() {
  let score = 0;
  document.getElementById("scoreKeeper").innerHTML =score;


}
