//Recipe pop up modal section 


//Sets up the button that will open the recipe modal

var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//Get the <span> element that closes the modal 

var closeBtn = document.getElementsByClassName("close-btn");

// Define a variable to hold the timeout
var modalTimeout;

//When the user clicks the recipe button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        // Get the specific modal to open
        var modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";

        // Clear any existing timeout
        clearTimeout(modalTimeout);

        // Set a timeout to close this specific modal after 10 seconds
        modalTimeout = setTimeout(function() {
            modal.style.display = "none";
        }, 10000);
    }
}
//when the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        // Clear the timeout if the modal is closed manually
        clearTimeout(modalTimeout);
        modals.forEach(function(modal) {
            if (modal.style.display === "block") {
                modal.style.display = "none";
            }
        });
    }

}

//EMAIL VALIDATION SECTION

document.getElementById('contactForm').addEventListener('submit', 
    function(event) {
        //overrides the default browser behavior of submitting the form and refreshing the page
        event.preventDefault();
        //Variable to validate that each field is filled out
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        //Email pattern checks for all symbols that would be needed for an email address such as @ and . and the text that would come before, between, and after.
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


        //Use this variable to display messages if fields are filled out or than you message
        const valMsg = document.getElementById('validateMsg');

        if (!firstName || !lastName || !phone || !message) {
            //checks if fields had been filled out 
            valMsg.innerHTML = '<p style="color:red;">Please fill out all fields before submitting.</p>';
        } else if (!emailPattern.test(email)) {
            //checks if email is valid
            valMsg.innerHTML = '<p style="color:red;">Please enter a valid email address.</p>';
        } else {
            //If all fields are filled out correctly, display thank you message
            valMsg.innerHTML = '<p style="color:green;">Thank you for contacting us, ' + firstName + '! We will get back to you shortly.</p>';
        }

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        
        };

        //Display what the user wrote inthe console 
        console.log(JSON.stringify(formData) );
    }
    
)