var userName = prompt("What is your name? : ");
firstLetter = userName.slice(0,1);
otherLetters = userName.slice(1,userName.length);

firstLetter = firstLetter.toUpperCase();
otherLetters = otherLetters.toLowerCase();

alert("Hello there, " + firstLetter + otherLetters + "!!");