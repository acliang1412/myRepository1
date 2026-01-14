function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            document.getElementById("Output").style.color = "red";
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            document.getElementById("Output").style.color = "yellow";
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            document.getElementById("Output").style.color = "green";
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            document.getElementById("Output").style.color = "blue";
            break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
            document.getElementById("Output").style.color = "pink";
            break;

        case "Purple":
            Color_Output = "Purple" + Color_String;
            document.getElementById("Output").style.color = "purple";
            break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
            document.getElementById("Output").style.color = "black";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, c.width, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, c.width, c.height);
