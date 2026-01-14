$(document).ready(function() {

    //This shineLoop function uses the chaining thechnique to utilize multple animate event methods in the same function.
    function shineLoop() {
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000)
        .animate({backgroundPositionX: '-800px'}, 3000);
    };

    //setInterval will repeat  the shineLoop function and 0 sets the delayed amount of time between each repeat.  
    setInterval(shineLoop, 0);

    $(document).on("scroll", function() {
        if($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({

        //Triggers the images to slide down one after the other 
        //when the user's mouse enters the div area with the 
        //"classicCars" ID
        mouseenter: function() {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        //Triggers the images to slide up and hide each title
        // one after the other when the user's mouse leaves
        // the div area with the "classicCars" ID
        mouseleave: function() {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //Creates a toggle effect on each FAQ queston by checking each element's sibling so they don't all display when one is clicked.

    $('div.question').on('click', function() {
        $(this).next().slideToggle('slow');
    });
})