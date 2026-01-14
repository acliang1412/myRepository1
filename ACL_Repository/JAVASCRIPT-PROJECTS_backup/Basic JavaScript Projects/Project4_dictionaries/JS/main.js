// Create a dictionary (object) named Animal with several key-value pairs.
var Animal = {
    Species: "Cat", // The species of the animal
    Color: "Orange", // The color of the animal
    Breed: "Tabby", // The breed of the animal
    Age: 2, // The age of the animal
    Sound: "Meow!" // The sound the animal makes
};

// This function is called when the paragraph element in the HTML is clicked.
function show_animal_sound() {
    // The delete operator removes the 'Sound' key and its value from the Animal dictionary.
    delete Animal.Sound;
    // We then try to display the value of the 'Sound' key. Since it was deleted,
    // the output in the HTML will be 'undefined'.
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}