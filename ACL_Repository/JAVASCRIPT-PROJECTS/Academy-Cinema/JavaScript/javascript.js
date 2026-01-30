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