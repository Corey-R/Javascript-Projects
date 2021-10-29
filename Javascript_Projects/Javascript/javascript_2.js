
// USING JAVASCRIPT TO VALIDATE CONTACT FORM

function validateForm() {
    let C = document.forms["contact"]["fname"].value; // Value of First Name
    let B = document.forms["contact"]["lname"].value; // Value of Last Name
    let A = document.forms["contact"]["age"].value; // Value of selected Age Range

    // Create an if statement for each input stating:
    // If the value of the input is blank or "", do the following instructions

    if (C == "") {
        alert("You must enter your First name to proceed."); // Creates alert box with error message.
        return false;
    }
    if (B == "") {
        alert("You must enter your Last name to proceed.");
        return false;
    }
    if (A == "") {
        alert("Please select an age range.");
        return false;
    }
}