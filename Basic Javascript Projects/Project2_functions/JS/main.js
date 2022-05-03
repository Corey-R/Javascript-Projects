// Using function to assign two variables and set id

// Defining a function to display string value to HTML element
// <p> by clicking on a button

// FUNCTION INCLUDES:
// Assigning variables with string value,
// using the getElementById to display the value of the method

function Orange() {
    var str = "Happy Halloween!";
    str = str.fontcolor("orange");
    document.getElementById("Happy").innerHTML = str;
}


// Using the += Operator to concatenate a variable to string value
// Also, defining variables to add font color to the concatenated string value.
// Using document.getElementById to display the method 

function Click() {
    var sentence = "Be sure to";
    sentence += " eat LOTS of delicious candy!";
    sentence = sentence.fontcolor("darkred");
    var word = "Look";
    word += " UP!";   
    word = word.fontcolor("red"); 
    document.getElementById("concatenate").innerHTML = sentence;
    document.getElementById("message").innerHTML = word;
}


// Function Challenge
// Created two functions to allow mouse over
// and mouse out. 

function Go() {
    var foo = "Challenge complete!";
    foo = foo.fontcolor("blue");
    document.getElementById("example").innerHTML = foo;
}

function Out() {
    var ret = "Example: Hover Over Me!";
    ret = ret.fontcolor("black");
    document.getElementById("example").innerHTML = ret;
}

