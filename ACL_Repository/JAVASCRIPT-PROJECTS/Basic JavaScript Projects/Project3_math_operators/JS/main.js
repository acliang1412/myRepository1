// This function is called when the paragraph with the id "Math" is clicked.
function performCalculation() {
    // Perform an addition operation
    var result = 5 + 7;
    // Display the result in the paragraph element
    document.getElementById("Math").innerHTML = "5 + 7 = " + result;
}

// This function performs a subtraction operation
function subtraction_Function() {
    var Subtraction = 10 - 5;
    document.getElementById("Math").innerHTML = "10 - 5 = " + Subtraction;
}

// This function performs a multiplication operation
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + simple_Math;
}

// This function performs a division operation
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (2 + 3) * 4 / 2 - 5;
    document.getElementById("Math").innerHTML = "2 plus 3, multiplied by 4, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

// This function demonstrates the increment operator
function increment_Operator() {
    var X = 5;
    X++; // This increases the value of X by 1
    document.getElementById("Math").innerHTML = "5 incremented is " + X;
}

// This function demonstrates the decrement operator
function decrement_Operator() {
    var Y = 5.25;
    Y--; // This decreases the value of Y by 1
    document.getElementById("Math").innerHTML = "5.25 decremented is " + Y;
}

// This function generates a random number and displays it in the paragraph
function generate_Random() {
    document.getElementById("Math").innerHTML = "Here is a random number between 0 and 100: " + (Math.random() * 100);
}

// Display a random number between 1 and 10 in an alert when the page loads
window.alert("Random number from 1 to 10: " + Math.floor(Math.random() * 10 + 1));
