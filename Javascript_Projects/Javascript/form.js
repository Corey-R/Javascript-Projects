// Create a form valdator below
function validation() {
    let a = document.forms["Registration"]["phone"].value;
    let b = document.forms["Registration"]["fname"].value;
    let c = document.forms["Registration"]["lname"].value;
    if (a == "") {
        alert("Please enter a valid phone number!");
        return false;
    }
    if (b == "") {
        alert("Please enter your First Name");
        return false;
    }
    if (c == "") {
        alert("Please enter your Last Name");
        return false;
    }

}

// Creating a pop-up for our form

function Register() {
    document.getElementById("phone").style.display = "block";
}

function Close() {
    document.getElementById("phone").style.display = "none";
}


function swap() {
    document.getElementById("colour").style.color = "red";
}
        
        
