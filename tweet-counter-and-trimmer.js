var userInput = prompt("Enter your text");
a = 140 - userInput.length;

alert("you"+ " have"+ " entered" + " " + userInput.length + " words" + "," + "You " + "have " + a + " " + "characters " + " left");

alert("Your Trimmed tweet : " + userInput.slice(0,141));