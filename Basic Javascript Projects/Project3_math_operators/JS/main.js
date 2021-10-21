
//Using the function Add() to display addition 
// within my HTML document

function Add() {
    var A = 5 + 7;
    document.getElementById("Math").innerHTML = "5 + 7 = " + A;
}

// Subtraction function

function Minor() {
    var sub = 1000 - 275;
    document.getElementById("subtract").innerHTML = "1000 - 375 = " + sub;
}

// Multiplication function

function Multiply() {
    var C = 36 * 12;
    document.getElementById("mix").innerHTML = "36 x 12 = " + C;
}

// Division function using mouse over even handler

function Division() {
    var divide = 22000 / 88;
    document.getElementById("dividend").innerHTML = "22000 / 88 = " + divide;
}

// Multiple Operations Function

function Multiple() {
    var cluster = (3+7) / 2 + 5 * 16;
    document.getElementById("open").innerHTML = "(3+7) / 2 + 5 * 16 = " + cluster;
}

// Using the % sign to show the remainder of 
// a dividend being divided by a divisor

function Remainder() {
    var div = 33 % 9;
    document.getElementById("close").innerHTML = "Dividing 33 by 9 leaves a remainder of: " +
    div;
}

// Using unary operator "-"

function Unary() {
    var un = 23;
    document.getElementById("change").innerHTML = -un;
}


// Using increment and decrement 

var S = 7;
S++;
document.write(S);



var T = 9.77;
T--;
document.write(" ||  " + T);


// Using Math.random to select a random number between
// 0 and 69

window.alert("Random number below: \n" + Math.random() * 69);

// Math Object and Math Method Challenge

function Object() {
    var O = 30
    var P = 2
    document.getElementById("calc").innerHTML = Math.pow(O, P);
}