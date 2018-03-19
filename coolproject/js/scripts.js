alert("You have a fox, a chicken and a sack of grain. You must cross a river with only one of them at a time. If you leave the fox with the chicken he will eat it; if you leave the chicken with the grain he will eat it. How can you get all three across safely?");

//variables
var fox = "start";
var grain = "start";
var chicken = "start";
var boat = "start";
var trouble = 1;
//End variables

// comment w/ main win condition: fox !== chicken !== grain !== "end"

while (fox !== "end" || grain !== "end" || chicken !== "end" && step !== "quit") {
  var objectLocation = "The fox is at: " + fox + "\n The chicken is at: " + chicken + "\n The grain is at: " + grain + "\n The boat is at: " + boat;

  alert(objectLocation);

  var step = prompt("What will you take across to the end? Fox, chicken, grain, or nothing?");

  while (step !== "fox" && step !== "grain" && step !== "chicken" && step !== "nothing" && step !== "quit") {
    step = prompt("That response is dumb. Please enter: fox, chicken, grain, or nothing");
  }

  alert("You have chosen to ferry " + step + " across the river.");

  if (step === "fox") {
    fox = "end";
  }

  if (step === "chicken") {
    chicken = "end";
  }

  if (step === "grain") {
    grain = "end";
  }

  var step = prompt("What will you take back across to the start? Fox, chicken, grain, or nothing?");

  while (step !== "fox" && step !== "grain" && step !== "chicken" && step !== "nothing" && step !== "quit") {
    step = prompt("That response is dumb. Please enter: fox, chicken, grain, or nothing");
  }

  alert("You have chosen to ferry " + step + " across the river.");

  if (step === "fox") {
    fox = "start";
  }

  if (step === "chicken") {
    chicken = "start";
  }

  if (step === "grain") {
    grain = "start";
  }

 if (fox === chicken) {
   alert("you lose. fox ate the chicken");
   step = "quit";
 }

 if (chicken === grain) {
   alert("you lose. chicken ate the grain");
   step = "quit";
 }
 else {
   alert ("you win!!!");
 }
}
