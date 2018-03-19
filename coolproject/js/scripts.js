alert("You have a fox, a chicken and a sack of grain. You must cross a river with only one of them at a time. If you leave the fox with the chicken he will eat it; if you leave the chicken with the grain he will eat it. How can you get all three across safely?");

//variables
var fox = "start";
var grain = "start";
var chicken = "start";
var boat = "start";
var trouble = 1;
//End variables

// comment w/ main win condition: fox !== chicken !== grain !== "end"

while ((fox !== "end") && (grain !== "end") && (chicken !== "end") && (trouble<5) && (step !== "quit")) {

  var objectLocation = "The fox is at: " + fox + "\n The chicken is at: " + chicken + "\n The grain is at: " + grain;

  alert(objectLocation);

  var step = prompt("What will you take across first? Fox, chicken, grain, or nothing?");

// comment with while condition: step !== "fox", "chicken", "grain", "nothing", "quit"

  while (step !== "fox" || step !== "grain") {
    prompt("That response is dumb. Please enter: fox, chicken, grain, or nothing");
  }

  alert("You have chosen to ferry " + step + " across the river.");

  if (step === "fox") {
    fox = "boat";

  }

  if (step === "chicken") {

  }
  if (boat == "start") {
    boat = "end";
  } else {
    boat = "start";
  }

 if (fox === chicken) {
   alert("you lose. fox ate the chicken");
   step = "quit";
 }

 if (chicken === grain) {
   alert("you lose. chicken ate the grain");
   step = "quit";
 }
}
