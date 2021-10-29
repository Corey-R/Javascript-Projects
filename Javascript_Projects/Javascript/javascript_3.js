
// Using the Data Attribute

function origin(world) {
    var place = world.getAttribute("data-world");
    alert(world.innerHTML + " is from " + place + "!");
}