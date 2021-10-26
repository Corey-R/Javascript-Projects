
// Creating a while loop

function Call_Loop() {
    var juice = 4;
    var discuss = "";
    while (juice > 0) {
        discuss += "<br>" + "Congratulations!";
        juice--;
    }
    document.getElementById("Loop").innerHTML = discuss;
}

// Length Propety Challenge

function length() {
    var Bon = "How many characters are here?";
    document.getElementById("count").innerHTML = Bon.length;
}

// FOR LOOPS SECTION

var Instruments = ["Trumpet", "Clarinet", "Saxophone", "Snare", "Xylophone", "Cymbals"];
var banjo = "";
var X;
function for_Loop() {
    for (X = 0; X < Instruments.length; X++) {
        banjo += Instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = banjo;
}

// ARRAY SECTION

function array_Function() {
    var Dog = [];
    Dog[0] = "barking";
    Dog[1] = "running";
    Dog[2] = "howling";
    Dog[3] = "jumping";
    Dog[4] = "growling";
    document.getElementById("Array").innerHTML = "My dog is infamously known for " +
    Dog[0] + " and " + Dog[1] + ".";
}

// CONSTANT ASSIGNMENT

function constant_function() {
    const Pets = {species:"bird", color:"yellow", price:"$49.99"};
   document.getElementById("constant").innerHTML = "Can you believe the pet store was selling a " +
   Pets.color + " " + Pets.species + " for " + Pets.price + "!!";

   // Let's change price property and add "age" property
   Pets.age = "6 month old";
   Pets.price = "$19.99";
   document.getElementById("constant2").innerHTML = "Oh wait! They have a " + 
   Pets.age + " " + Pets.species + " for only " + Pets.price + "! I can do that!";
}

// LET KEYWORD EXAMPLE

var cake = "Chocolate is my favorite cake!";

function taste() {
    let cake = "Vanilla is actually my favorite cake..don't tell your father.";
    document.getElementById("cake").innerHTML = cake;
}

function taste2() {
    document.getElementById("cake2").innerHTML = cake;
}

// DEFINING THE RETURN STATEMENT

// The return statement stops the execution of a function and returns a value from that function 

function stop() {
    return "BLOCKED!!" + " This message is shown without the use of a button to call the function";
}
document.getElementById("block").innerHTML = stop();

// OBJECT ASSIGNMENT

let song = {
    artist: "Brandy ",
    feature: "Eve ", 
    title: "Gonna Find My Love " , 
    album: "Unknown ",
    description : function() {
        return "I created an acoustic cover of " + this.title + 
        "which was originally sang by " + this.artist + "featuring " +
        this.feature + "from an " + this.album + "album. Give it a listen!";
    }
};
document.getElementById("sing").innerHTML = song.description();

// DEFINING BREAK STATEMENT

// The break statement "jumps out" of a loop.

// DEFINING THE CONTINUE STATEMENT

// The continue statement "jumps over" one iteration in the loop.

// UTILIZING THE BREAK STATEMENT IN A LOOOP

function broken() {
    var text = "";
    for (let b = 0; b < 30; b++) {
        if (b === 5) {break;}
        text += "We have " + b + " bird(s) now!" + "<br>";
    }
    document.getElementById("switch").innerHTML = text;
}

// UTILIZING THE CONTINUE STATEMENT IN A LOOP

function skip() {
    var blue = "";
    for (let b = 0; b < 5; b++) {
        if (b === 2) {continue;}
        blue += "We've lost " + b + " bird(s) now!" + "<br>";
    }
    document.getElementById("flip").innerHTML = blue;
}