
// Displaying data type for a variable

document.write(typeof false);

// Using Coercion to display the forced combination
// of two data types

function force() {
    var check = "Planet" + 5;
    document.getElementById("planet").innerHTML = check;
}

// Using a function to display NaN in the HTML page

function Dolly() {
    document.getElementById("pump").innerHTML = 0/0;
}

// Using the IsNaN function to display "true" on page

function lava() {
    document.getElementById("choco").innerHTML = isNaN('Happy');
}


// Another isNaN function displaying false

function cake() {
    document.getElementById("vanilla").innerHTML = isNaN('75');
}

// Using getElementById method to display infinity on page

function long() {
    document.getElementById("number").innerHTML = 3E320;
}

// Using getElementById method to display -infinity on page

function negative() {
    document.getElementById("move").innerHTML = -8E412;
}

// Boolean logic display on page by
// using < and > 

function large() {
    document.getElementById("coin").innerHTML = 30 < 50;
}

function small() {
    document.getElementById("dollar").innerHTML = 50 > 200;
}

// Ucing console.log to display data in the console 
// section of the browser's developer tools.

console.log(11 + 19);

// Using Boolean logic to display false in the console

console.log(21 < 2);

// Using equivalent "==" to display Boolean in the browser

function bowser() {
    document.getElementById("evil").innerHTML = 39 == 39;
}

function mario() {
    document.getElementById("evil2").innerHTML = 21 == 2;
}

// Triple Equal === 

function three() {
    var A = "three";
    var B = "three";
    document.getElementById("love").innerHTML = A === B;
}

// False by different values and data types

function triple() {
    var X = 3;
    var Y = "three";
    document.getElementById("hate").innerHTML = X === Y;
}

// False by different value but same data type

function tres() {
    var C = 3;
    var D = 33;
    document.getElementById("envy").innerHTML = C === D;
}

// False by different data type but same value

function san() {
    var M = "three";
    var N = 3;
    document.getElementById("fear").innerHTML = M === N;
}

// Using AND/OR Logical Operators

function happy() {
    document.getElementById("ecstatic").innerHTML = 9 < 7 && 3 < 4;
}

function happy2() {
    document.getElementById("thrilled").innerHTML = 3 > 2 && 16 > 10;
}

// False/True using OR Logic

function sad() {
    document.getElementById("gloomy").innerHTML = 3 > 1 || 9 < 3;
}

function sad2() {
    document.getElementById("depressed").innerHTML = 5 < 3 || 6 < 3;
}

// Using ! Not Operator To Display Boolean

function anger() {
    document.getElementById("mad").innerHTML = ! (33 < 12);
}

function anger2() {
    document.getElementById("rage").innerHTML = ! (28 > 9);
}