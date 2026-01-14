function validateForm() {
    const favAnime = document.getElementById('favAnime').value;
    const favChar = document.getElementById('favChar').value;
    const rating = document.getElementById('rating').value;

    if (favAnime.trim() === '') {
        alert('Please enter your favorite anime.');
        return false;
    }

    if (favChar.trim() === '') {
        alert('Please enter your favorite character.');
        return false;
    }

    if (rating === '' || isNaN(rating) || rating < 1 || rating > 10) {
        alert('Please enter a valid rating between 1 and 10.');
        return false;
    }

    alert('Form submitted successfully!');
    // In a real application, you would likely submit the form data to a server here.
    // e.g., document.getElementById('animeForm').submit();
    return true; // Or false to prevent actual submission for this example
}
