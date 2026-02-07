function validateForm() {
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var phone = document.forms["myForm"]["phone"].value;

    if (fname == "" || lname == "" || phone == "") {
        alert("All fields must be filled out");
        return false;
    }
}
