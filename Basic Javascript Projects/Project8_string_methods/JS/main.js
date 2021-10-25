
// String Methods

function Explanation() {
    var good = "Hello, ";
    var chip = "welcome to ";
    var potato = "my Project 8 ";
    var bbq = "webpage!"
    var comment = good.concat(chip, potato, bbq);
    document.getElementById("hello").innerHTML = comment;
}

// Slice Assignment 

function slice() {
    var meet = "This year's meeting will be at Six Flags!";
    var cut = meet.slice(-10);

    // Using toUpperCase() method 
    var caps = cut.toUpperCase();
    document.getElementById("dice").innerHTML = caps;
}

// TOUPPERCASE() DEFINITION
// Note:The toUpperCase() method converts a string to uppercase letters. The toUpperCase() method does not 
// change the original string. Tip: Use the The toLowerCase() method to convert a string to lowercase.

// SEARCH() METHOD DEFINITION
// Note: The search() method searches a string for a specified value, and returns the position of the match.
// The search value can be string or a regular expression.

// Using search() Method

var jump = "How many jumps will it take to reach the top?";
document.write(jump.search("jumps")); // 9 will display at the top of the page


// TOSTRING() METHOD

function Alter() {
    var convert = 237;
    document.getElementById("change").innerHTML = convert.toString() + 
    " is now a string";
}

// TOPRECISION Method

function length() {
    var Y = 14845.555474569645;
    document.getElementById("precision").innerHTML = Y.toPrecision(5);    
}

// NOTE: The return string was 14846 meaning it rounded to the nearest number.


// Defining the toFixed() Method

// The toFixed() method converts a number into a string, rounding to a specified number 
// of decimals. Note: if the desired number of decimals are higher than the actual number, 
// zeros are added to create the desired decimal length.

// Utilizing the toFixed() method

function fixed_method() {
    var s = 78;
    var fix = s.toFixed(2);
    document.getElementById("fixed").innerHTML = fix;
}

// Defining valueOf() Method

// The valueOf() method returns the array itself. valueOf() is the default method of 
// the array object. valueOf() does not change the original array.

// Using the valueOf() Method

function value_method() {
    var array = ["Libraries", " Museums", " Concerts", " Opera"];
    document.getElementById("value").innerHTML = array.valueOf();
}