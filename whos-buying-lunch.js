// A JS program which would randomly select a person's name from the user provided array, and suggest that person to buy lunch.

function whosPaying(names) {
    var names = [];

    var random = Math.floor(Math.random() * names.length);
    console.log(random, names[random]);

}