// JS Program to check for a guest in the guestlist.

var guestList = ["Atharva", "Suraj", "Arya", "Shaunak", "Sahil", "Prasad", "Abhishek"];
var guestName = prompt("Enter your registered guest name : ");

if (guestList.includes(guestName)) {
    alert("Welcome " + guestName + " , enjoy the Party! ");
} else {
    alert("Trying to sneak in " + guestName + " ? Your Name isn't on the guest guestlist. ");
}