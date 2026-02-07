// This is a global variable, accessible by any function in this script.
var globalValue = 10;

/**
 * Demonstrates using a global variable. This function adds 20 to the globalValue.
 */
function demonstrateGlobalScope1() {
    // Writes "30" to the document.
    document.write(20 + globalValue + "<br>");
}

/**
 * Also demonstrates using a global variable, showing the order of operations doesn't matter here.
 */
function demonstrateGlobalScope2() {
    // Also writes "30" to the document.
    document.write(globalValue + 20 + "<br>");
}

// Call the functions to execute them.
demonstrateGlobalScope1();
demonstrateGlobalScope2();

/**
 * Demonstrates local scope. The 'localValue' variable is only accessible within this function.
 */
function demonstrateLocalScope() {
    var localValue = 10;
    console.log("From demonstrateLocalScope:", 20 + localValue);
}

/**
 * This function intentionally tries to access a local variable from another function
 * to demonstrate a scope error.
 */
function demonstrateScopeError() {
    // This will cause a ReferenceError because 'localValue' is not defined in this scope.
    // We wrap it in a try...catch block to handle the error gracefully.
    try {
        // This line will fail.
        console.log(localValue + 20);
    } catch (error) {
        console.error("An error occurred in demonstrateScopeError:", error.message);
    }
}

// Call the functions to demonstrate local scope and scope error.
demonstrateLocalScope();
demonstrateScopeError();

/**
 * Checks the user's input age and displays a message indicating
 * whether they are old enough to vote.
 */
function checkVotingAge() {
    var age = document.getElementById("Age").value;
    var votingMessage;
    if (age >= 18) {
        votingMessage = "You are old enough to vote!";
    } else {
        votingMessage = "You are not old enough to vote!";
    }
    // It's generally better to avoid special characters like '?' in HTML id attributes.
    document.getElementById("How_old_are_you?").innerHTML = votingMessage;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}
