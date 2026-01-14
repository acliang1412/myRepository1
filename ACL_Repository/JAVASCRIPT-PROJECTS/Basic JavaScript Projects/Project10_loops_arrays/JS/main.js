
// A simple while loop for counting
function myLoop() {
    let digit = "";
    let x = 1;
    while (x < 6) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("loopOutput").innerHTML = digit;
}
// A function to demonstrate the string length property
function stringLengthDemo() {
    let text = "How many characters are in this string?";
    let length = text.length;
    document.getElementById("stringLengthOutput").innerHTML = "The string '" + text + "' has " + length + " characters.";
}

// A for loop to iterate through an array

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function instrumentLoop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("instrumentListOutput").innerHTML = Content;
}

function arrayFunction() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("arrayOutput").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

// A constant object demonstration
function constantFunction() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("constantOutput").innerHTML = "The " + Musical_Instrument.color + " " + Musical_Instrument.brand + " " + Musical_Instrument.type + " costs " + Musical_Instrument.price + ".";
}

// Call a function and save the return value in x:

function myFunction(a, b) {
  // Return the product of a and b
  return a * b;
}

// Demo function: calls `myFunction`, writes its return value to the page, and returns it.
function showProduct() {
    const value = myFunction(4, 3);
    const el = document.getElementById("Product");
    if (el) el.innerHTML = value;
    return value;
}


function findFirstDivisibleBySeven() {
    let result = "No number divisible by 7 found within the first 100 numbers.";
    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0) {
            result = `The first number divisible by 7 is: ${i}`;
            break; // Exit the loop as soon as the condition is met
        }
    }
    console.log(result);
    return result;
}

findFirstDivisibleBySeven(); // Output: The first number divisible by 7 is: 7


function skipNumberFive() {
    let output = "Numbers (excluding 5):";
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            continue; // Skip the rest of the current iteration when i is 5
        }
        output += ` ${i}`;
    }
    console.log(output);
    return output;
}

skipNumberFive(); // Output: Numbers (excluding 5): 1 2 3 4 6 7 8 9 10

// --- New functions and object as per user request ---

// Function demonstrating a while loop for a countdown
function countdownWhileLoop() {
    let count = 5; // Initialize a counter variable with 'let'
    let output = "Countdown: "; // Initialize an output string
    // The while loop continues as long as the 'count' variable is greater than 0
    while (count > 0) { 
        output += count + "... "; // Append the current count to the output string
        count--; // Decrement the counter for the next iteration
    }
    output += "Blast off!"; // Add a final message after the loop finishes
    // Safely display the output in the HTML element with id "whileLoopOutput"
    const el = document.getElementById("whileLoopOutput");
    if (el) {
        el.innerHTML = output;
    }
}

// Function demonstrating a for loop to list fruits
function listFruitsForLoop() {
    // Declare an array of fruits using 'const' as the array reference won't change
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]; 
    let fruitList = "My favorite fruits:<br>"; // Initialize an output string with a heading
    // The for loop iterates through the 'fruits' array using an index 'i'
    // It starts at index 0, continues as long as 'i' is less than the array's length, and increments 'i' each time
    for (let i = 0; i < fruits.length; i++) { 
        fruitList += (i + 1) + ". " + fruits[i] + "<br>"; // Add each fruit to the list with a number
    }
    // Safely display the output in the HTML element with id "forLoopOutput"
    const el = document.getElementById("forLoopOutput");
    if (el) {
        el.innerHTML = fruitList;
    }
}

// Function demonstrating array creation and modification
function demonstrateArray() {
    // Declare an array of colors using 'let' because its contents will be modified
    let colors = ["Red", "Green", "Blue", "Yellow"]; 
    // Access and display an element using its index (arrays are zero-indexed)
    let initialDisplay = "Initial third color: " + colors[2] + "<br>";
    
    // Modify an element in the array
    colors[2] = "Purple"; // Change the element at index 2 from "Blue" to "Purple"
    
    // Display the modified element
    let modifiedDisplay = "Modified third color: " + colors[2] + "<br>";
    
    // Safely display the output in the HTML element with id "arrayOutput"
    const el = document.getElementById("arrayDemoOutput");
    if (el) {
        // Use .join(", ") to display all array elements separated by commas
        el.innerHTML = initialDisplay + modifiedDisplay + "All colors: " + colors.join(", "); 
    }
}

// Object created using 'let' keyword
let book = { // Declare an object named 'book' using 'let'
    title: "The Great Adventure", // Property: title with a string value
    author: "Jane Doe", // Property: author with a string value
    year: 2023, // Property: year with a number value
    genre: "Fantasy" // Property: genre with a string value
};

// Function to display properties of the 'book' object
function displayBookInfo() {
    // Access and display object properties using template literals for cleaner string formatting
    let info = `Book Title: ${book.title}<br>Author: ${book.author}<br>Published Year: ${book.year}<br>Genre: ${book.genre}`;
    // Safely display the output in the HTML element with id "objectOutput"
    const el = document.getElementById("objectOutput");
    if (el) {
        el.innerHTML = info;
    }
}
