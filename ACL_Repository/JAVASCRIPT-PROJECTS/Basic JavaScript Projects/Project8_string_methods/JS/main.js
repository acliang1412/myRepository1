// This function concatenates four string variables to form a complete sentence.
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// This function uses the slice() method to extract a section of a string.
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

// This function converts a number to a string using the toString() method.
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// This function formats a number to a specified length using the toPrecision() method.
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Numbers_T").innerHTML = X.toPrecision(10);
}

// This function formats a number to a specified number of decimal places using the toFixed() method.
function toFixed_Method() {
    var X = 3.1415926535;
    document.getElementById("ToFixed").innerHTML = X.toFixed(2);
}

// This function returns the primitive value of a string object using the valueOf() method.
function valueOf_Method() {
    var text = "Hello World!";
    document.getElementById("ValueOf").innerHTML = text.valueOf();
}
