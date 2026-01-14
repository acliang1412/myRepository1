function rideFunction() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function votingAge() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

// Object constructor function for a Vehicle
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Create new instances of the Vehicle object
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// Function to display the information of one of the vehicles
function displayVehicleInfo() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// This function demonstrates what happens when you use a reserved word.
// Using 'new' as a variable name will cause a SyntaxError and the script will not run correctly.
function reservedWordDemo() {
    // var new = "This will not work"; // 'new' is a reserved word
    // document.getElementById("New_and_This").innerHTML = new;
    console.error("The function 'reservedWordDemo' cannot be executed because it uses the reserved word 'new' as a variable name, which causes a SyntaxError.");
    document.getElementById("New_and_This").innerHTML = "Open the developer console (F12) to see the SyntaxError caused by using a reserved word.";
}

// Nested function example
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
