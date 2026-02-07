//Initialize all popovers on the page

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')


popoverTriggerList.forEach(function(element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    });
});

// Function to display selected movie options in the modal
function displaySelectedMovieInModal() {
    var movie = document.getElementById("movieSelect").options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById("timeSelect").options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;
    var message = "You are about to purchase " + quantity + " ticket(s) for " + movie + " at " + time + ".";

    // Display Modal
    var modalBody = document.querySelector('#ticketModal .modal-body');
    modalBody.textContent = message;
    var ticketModal = new bootstrap.Modal(document.getElementById('ticketModal'));
    ticketModal.show();
}


function buyTickets(){
    displaySelectedMovieInModal();
}

//JQUERY

//Shrink header size when the document is scrolled down by 80px
$(document).on("scroll", function() {
    //When the webpage is scrolled down from the top by 50px 
    //if statement will trigger
    if ($(document).scrollTop()>50) {
        //Once the 50px requirement is met, add nav-shrink class selector to the same HTML element that has the nav class
        $("nav").addClass("nav-shrink");
        //Adjust the position of the movile drop meny to accommodate the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //If the webpage has not been scrolled down or is back at the top the nav-shrink class selector is removed from the HTML element with the nav class selector
        $("nav").removeClass("nav-shrink");
        //Reset the position of the mobile drop menu to its original position
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

//Close mobile meny when a nav link is clicked 
$(document).ready(function(){
    //On click when and element contains just the nav-link class and not the dropdown0toggle and then also close when an element with the class .dropdown-item is clicked (each movie link) has been clicked
    $(".navbar-nav").on("click", ".nav-link:not(.dropdown-toggle), .dropdown-item", function(){
        $(".navbar-collapse").collapse("hide");
    });
});