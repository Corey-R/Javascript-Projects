// Using function to assign two variables and set id

// Defining a function to display string value to HTML element
// <p> by clicking on a button

// FUNCTION INCLUDES:
// Assigning variables with string value,
// using the getElementById to display the value of the method

function Orange() {
    var str = "Happy Halloween!";
    var result = str.fontcolor("orange");
    document.getElementById("Happy").innerHTML = result;
}


// Using the += Operator to concatenate a variable to string value
// Also, defining variables to add font color to the concatenated string value.
// Using document.getElementById to display the method 

function Click() {
    var sentence = "Be sure to";
    sentence += " eat LOTS of delicious candy!";
    var result = sentence.fontcolor("darkred");
    var word = "Look";
    word += " UP!";   
    var action = word.fontcolor("red"); 
    document.getElementById("concatenate").innerHTML = result;
    document.getElementById("message").innerHTML = action;
}