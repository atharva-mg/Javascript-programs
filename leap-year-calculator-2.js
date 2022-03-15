function isLeap(year) {

    if (year % 4 === 0) {
        console.log(year + " Leap year.");
        alert(year + " Leap year.");
    } else if (year % 100 !== 0 && year % 100 === 0) {
        console.log(year + " Leap year.");
        alert(year + " Leap year.");
    } else if (year % 400 === 0) {
        console.log(year + " Leap year.");
        alert(year + " Leap year.");
    } else {
        console.log(year + " Not leap year.");
        alert(year + " Not leap year.");
    }
}

isLeap(2400);