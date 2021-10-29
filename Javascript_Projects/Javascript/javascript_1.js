
// JAVASCRIPT PROJECTS

// Switch Statement 

function Oracle() {
    var result;
    var number = document.getElementById("Number").value;
    switch (number) {
        case "1":
            result = "You're going to go on a cruise! <br>" +
            " And meet a guy named Dave....sorry Dave";
        break;
        
        case "2":
            result = "A close friend is going to profess their love for you! <br>" + 
            " You will be the 32nd person they've said that too!";
        break;

        case "3":
            result = "You're going to become a Famous singer! <br>" + 
            " It's too bad Famous Amos isn't as well known :(.";
        break;

        case "4":
            result = "Your boss will call saying he has a HUGE promotion for you! <br>" + 
            " It's a promo code good for half-off slushes and drinks from Sonic between <br>" + 
            " 2 and 4 p.m.\; Happy Hour!? :(";
        break;

        default:
            result = "Your future's not looking to good..." + 
            " I see a person telling you to only enter a number from the above list. <br>" + 
            " Talk about a bleak future huh?!";
    }
    document.getElementById("future").innerHTML = result;
}

// Using the getElementsByClassName Method

function get() {
    var V = document.getElementsByClassName("retrieve");
    V[1].innerHTML = " Gil: \"Hey Johnny!\"";
}

// Adding graphics to the canvas element

var c = document.getElementById("Name");
var ctx = c.getContext ("2d");

// Creating a Diagonal Line
ctx.moveTo(0,0);
ctx.lineTo(300, 200);
ctx.stroke();

// Adding A Gradient Background

var gradient = ctx.createLinearGradient(0, 0, 0, 220);
gradient.addColorStop(0, "black");
gradient.addColorStop(1, "white");
ctx.fillStyle = gradient;
ctx.fillRect(70, 30, 150, 120);