// Create a variable and display it in an alert pop-up
var A = "Hello, My Name is Andy";
window.alert(A);

// Create a variable containing a string with escaped quotes and a line break
var string = "Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br> \"Eat my shorts!\" Bart responded.";

// Create a variable by concatenating multiple strings together
var famousQuote = "\"Be who you are and say what you feel," + " because those who mind don\'t matter and those who matter don\'t mind.\"" + " -Dr. Seuss";

// Display the concatenated quote and the other string, separated by a line break
document.write(famousQuote + "<br>" + string);

// Declare multiple variables in a single statement
var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", 
Daughter = "Penny", Son = "Zorro";

// Display the value of the 'Dad' variable on the page, preceded by a line break
document.write("<br>" + Dad);

// Create a variable to hold the result of a mathematical expression
var result = 10 + 5; // This expression adds 10 and 5, resulting in 15

// Display the result of the expression on the page
document.write("<br>The result of the expression 10 + 5 is: " + result);

// Create a variable with a string value for the beginning of a sentence
var Sent1 = "This is the beginning of the string";

// Create a variable with a string value for the end of a sentence
var Sent2 = " and this is the end of the string";

// Concatenate the two string variables and display the result on the page using document.write()
document.write("<br>" + Sent1 + Sent2);

// Write an expression and display its result on the page
document.write("<br>Here is an expression: " + (25 / 5));

// This function is called by the onclick event in the HTML
function displayMessage() {
    window.alert("You triggered the click event!");
}