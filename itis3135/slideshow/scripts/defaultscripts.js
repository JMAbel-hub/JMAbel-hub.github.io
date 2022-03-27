$(document).ready(function () {
    //taking element slides
    var nextSlide = $("#slides img:first-child");
    //declaring variables
    var nextCaption;
    var nextSlideSource;
    //the function for running the slide show
    var runSlideShow = function () {
        $("#caption").hide(2000);
        $("#slide").fadeOut(1000,function () {
            if (nextSlide.length == 0){
                nextSlide = $("#slides img:first-child");
            } else {
                nextSlide = nextSlide.next();
            }
            
            //get src attribute
            nextSlideSource = nextSlide.attr("src");
            nextCaption = nextSlide.attr("alt");
            
            //set src attribute
            $("#slide").attr("src", nextSlideSource).fadeIn(1000);
            
            //get alt attribute with show() method
            $("#caption").text(nextCaption).show(1000);
        }); 
    };
    
    //start slide show
    var timer = setInterval(runSlideShow, 5000);
    // starting and stopping the slide show
    $("#Slide").click(function () {
        if (timer != null) {
            clearInterval(timer); 
            timer = null;
        } else {
            timer = setInterval(runSlideShow, 5000);
        }
        
        });
    }); 