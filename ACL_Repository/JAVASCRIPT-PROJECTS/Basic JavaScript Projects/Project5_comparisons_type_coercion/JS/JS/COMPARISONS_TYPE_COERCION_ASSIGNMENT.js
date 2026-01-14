// This function will run once the entire HTML document is loaded.
// This prevents errors from trying to modify elements that don't exist yet.
window.onload = function() {

    // 1. Utilize document.write() and the typeof operator.
    // A better practice is to manipulate a specific element's content.
    // We define a variable and then use typeof to get its data type.
    var myFavoriteLanguage = "JavaScript";
    document.getElementById("typeof_example").innerHTML = "The data type of myFavoriteLanguage is: " + typeof myFavoriteLanguage;

    // 2. Write an expression combining a string and a number (Type Coercion).
    // A better practice is to manipulate a specific element's content.
    // JavaScript coerces the number 10 into a string and concatenates it.
    document.getElementById("coercion_example").innerHTML = "'42' + 10 = " + ("42" + 10);

    // 3. Utilize various operators and display them in the browser.

    // == (Equal to) operator: Compares for equality after type coercion.
    // Returns true because the string '10' is coerced to a number.
    document.getElementById("equal").innerHTML = "Is 10 == '10'? " + (10 == "10");

    // === (Strict Equal to) operator: Compares value and type.
    // Returns false because one is a number and the other is a string.
    document.getElementById("strict_equal").innerHTML = "Is 10 === '10'? " + (10 === "10");

    // > (Greater than) operator.
    document.getElementById("greater_than").innerHTML = "Is 20 > 10? " + (20 > 10);

    // < (Less than) operator.
    document.getElementById("less_than").innerHTML = "Is 20 < 10? " + (20 < 10);

    // && (AND) operator: Returns true if both conditions are true.
    document.getElementById("and").innerHTML = "Is (5 > 1) && (10 > 5)? " + (5 > 1 && 10 > 5);

    // || (OR) operator: Returns true if at least one condition is true.
    document.getElementById("or").innerHTML = "Is (5 < 1) || (10 > 5)? " + (5 < 1 || 10 > 5);
};

// ! (NOT) operator: Inverts the boolean value.
function not_Function() {
    // !(10 > 20) is true because (10 > 20) is false.
    document.getElementById("not_result").innerHTML = "The result of !(10 > 20) is: " + !(10 > 20);
}