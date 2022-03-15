//Javascript Program to calculate whether the enteredm year is leap year or no. 
//Year input will be taken from the user.

var userYear = prompt("Enter the Year You want to check whether it is a Leap Year or not : ");

if (userYear % 4 === 0) {
    console.log(userYear + " Is a leap year.");
    alert(userYear + " Is a leap year.");
} else if (userYear % 100 !== 0 && userYear % 100 === 0) {
    console.log(userYear + " Is a leap year.");
    alert(userYear + " Is a leap year.");
} else if (userYear % 400 === 0) {
    console.log(userYear + " Is a leap year.");
    alert(userYear + " Is a leap year.");
} else {
    console.log(userYear + " Is not a leap year.");
    alert(userYear + " Is not a leap year.");
}