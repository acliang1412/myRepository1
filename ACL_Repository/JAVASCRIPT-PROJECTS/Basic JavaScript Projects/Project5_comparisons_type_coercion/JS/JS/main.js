// Display NaN by performing an undefined mathematical operation
document.write("0 divided by 0 results in: " + 0/0 + "<br><br>");

// Utilize isNaN() to display "true" by checking a non-numeric string
document.write("Is 'Hello!' a number? ");
document.write(isNaN('Hello!'));
document.write("<br><br>");

// Utilize isNaN() to display "false" by checking a number
document.write("Is 500 a number? ");
document.write(isNaN(500) + "<br><br>");

// Use the greater-than operator to display "true"
document.write("10 > 4 evaluates to: ");
document.write(10 > 4);
document.write("<br><br>");

// Use the less-than operator to display "false"
document.write("10 < 4 evaluates to: ");
document.write((10 < 4) + "<br><br>");

// Use the == operator to return "true"
document.write("Does 10 equal '10' with type coercion? ");
document.write((10 == "10") + "<br><br>");

// Use the == operator to return "false"
document.write("Does 5 equal 10? ");
document.write((5 == 10) + "<br><br>");

// Use the === operator to return "true" (same data type and value)
document.write("Does 10 === 10 (same value and type)? ");
document.write(10 === 10);
document.write("<br><br>");

// Use the === operator to return "false" (different data type and value)
document.write("Does 10 === 'twenty' (different value and type)? ");
document.write(10 === "twenty");
document.write("<br><br>");

// Use the === operator to return "false" (same value, different data type)
document.write("Does 10 === '10' (same value, different type)? ");
document.write(10 === "10");
document.write("<br><br>");

// Use the === operator to return "false" (same data type, different value)
document.write("Does 10 === 5 (same type, different value)? ");
document.write((10 === 5) + "<br><br>");

// Use the AND operator (&&) to display "true"
document.write("Is 5 > 2 AND 10 > 4? ");
document.write((5 > 2 && 10 > 4) + "<br><br>");

// Use the AND operator (&&) to display "false"
document.write("Is 5 > 10 AND 10 > 4? ");
document.write((5 > 10 && 10 > 4) + "<br><br>");

// Use the OR operator (||) to display "true"
document.write("Is 5 > 10 OR 10 > 4? ");
document.write((5 > 10 || 10 > 4) + "<br><br>");

// Use the OR operator (||) to display "false"
document.write("Is 5 > 10 OR 10 > 20? ");
document.write((5 > 10 || 10 > 20) + "<br><br>");

// Display Infinity and -Infinity using getElementById
// A number larger than 1.7976931348623157E308 (Number.MAX_VALUE) displays as Infinity.
document.getElementById("infinity").innerHTML = 2E308;
// A negative number smaller than -Number.MAX_VALUE displays as -Infinity.
document.getElementById("neg_infinity").innerHTML = -3E308;

// Perform a math operation with console.log()
console.log(8 * 4);

// Display "false" in the console using Boolean logic
console.log(5 > 10);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}


