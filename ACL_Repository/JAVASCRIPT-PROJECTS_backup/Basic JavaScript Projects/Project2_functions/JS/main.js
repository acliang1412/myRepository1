// This function will be called by the button in the HTML file
function myFunction() {
    // Assign two variables
    var sentence = "I am learning";
    var sentence_part_2 = " a lot from this book!";

    // Concatenate the two variables
    sentence += sentence_part_2;

    // Use getElementById to find the paragraph and change its content
    document.getElementById("target_paragraph").innerHTML = sentence;
}