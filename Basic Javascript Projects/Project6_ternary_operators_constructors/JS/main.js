
// Using ternary operators to create a
// conditional statement.

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Creating a ternary operator to determine the 
// appropriate age to vote.

function Voter_Function() {
    var vate, eligible;
    vote = document.getElementById("vote").value;
    eligible = (vote >= 18) ? "You are":"You are not";
    document.getElementById("result").innerHTML = eligible + " eligible to vote!";
}


// Coding Assignment 

// Creating the constructor for "Vehicle" class
// For each property "Make, Model, etc." we are 
// using the "this" keyword to assign "Vehicle_..."
// to their respected properties.

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Creating new instances in the "Vehicle" class which will contain
// the default assignments from the constructor 
// Note: new instances are created using the "new" keyword

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Creating a function that uses the getElementById method to allow
// access for the "myFunction()" to be called by a specific id of your choosing

// Note: To clarify, take "Erik.Vehicle_Color" as our example: 
// Erik is the name of the variable we assigned above "var Erik"
// Vehicle_Color targets the property "Color" which was defined in the class "Vehicle"
// The "." separates the two

function myFunction() {
    document.getElementById("Keywords_and_constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}


// Keyword Assignment

function Apples(Color, Quantity, Price) {
    this.Apples_Color = Color;
    this.Apples_Quantity = Quantity;
    this.Apples_Price = Price;
}

var Francine = new Apples("green", 9, "seven dollars");

function Keyword() {
    document.getElementById("New_and_This").innerHTML = 
    "Francine made an apple pie with " + Francine.Apples_Quantity + " " + Francine.Apples_Color +
    " apples that she got from the supermarket for " + Francine.Apples_Price + "!";
}


// Reserved Word Challenge

// Attempt to display a variable that is assigned a 
// reserved word. 

var fof = 22;
document.write(foo);

// Note: Only the title of the HTML document was displayed and not 22.
// This is because "for" is reserved to be used as an initiator of a loop.

// Note: Along with 22 not showing in the document.write section, none of 
// the other functions (either previously or after) is working. 
// If "for" is changed to an accepted variable, all of the established functions
// will work properly. For was changed to continue future assignments.

// Next, we will create an Object Constructor function

function Employee(Name, Age, Education, Title) {
    this.Employee_Name = Name;
    this.Employee_Age = Age;
    this.Employee_Education = Education;
    this.Employee_Title = Title;
}

// Note: From here, you can assigned variables of your choosing
// to create a new instance of the above class.
// var Douglas = Employee("Douglas Walker", "19", "High School Diploma", "Customer Care");
// Since it was not required for this assignment, however, we will not continue unless required.

// The below function will display in the web browser

function Make() {
    document.getElementById("miss").innerHTML = 
    "Nothing is displayed in the document.write method above the" + 
    " heading 1 element but the title of the HTML document. This is " +
    "because the reserved word for was attempted to be used as " + 
    "a variable.";
}


// Nested Functions Assignment 

function Nestle() {
    document.getElementById("Nested_Function").innerHTML = Counting_Stars();
    function Counting_Stars() {
        var begin = 0;
        function Plus_one() {begin += 1;}
        Plus_one();
        return begin;
    }
}