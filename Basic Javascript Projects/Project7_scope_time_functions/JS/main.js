
// Local and Global Variable Assignment

// Assigning Global Variable

var A = 14;

// Assigning a local variable within a function

function Math() {
    var B = 20;
    console.log(B / 5);
}
// This should display "4" in the console

// Function using an undefined local variable

function Math2() {
    console.log(B + 10);
}

// We will not call the two functions

Math();
Math2();


// Method Assignment Date().hetHours()

function Jenkies() {
    if (new Date().getHours() > 3) {
    document.getElementById("Zoinks").innerHTML = "It's a clue!";
    }
}

// IF Statement Assignment

function Example() {
    if (3 < 2) {
    document.getElementById("True").innerHTML = "Correct";
    }
    else {
        document.getElementById("True").innerHTML = "Incorrect";
    }
}

// ELSE Statement

function Verification() {
    var Age = document.getElementById("Age").value;
    if (Age < 16) {
        document.getElementById("verify").innerHTML =
        "You cannot purchase this item without adult supervision.";
    }
    else {
        document.getElementById("verify").innerHTML = 
        "Your age has been verified! You may proceed to checkout.";
    }
}

// ELSE IF Step Example

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}