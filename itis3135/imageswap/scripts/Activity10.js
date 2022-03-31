$(document).ready(function () {
    // set up event handlers for links
    $("#image_list a").click(function (event) {
        // cancel the default action of each link
        event.preventDefault();
        // get the image URL and caption for each image and animate the caption
        var imageURL = $(this).attr("href");
        var caption = $(this).attr("title");

        // fades out the old picture/caption and fades in the new picture/caption
        $("#caption").fadeOut(1000, function(){
            $("#caption").text(caption).fadeIn(1000);
        });

        $("#image").fadeOut(1000, function(){
            $("#image").attr("src", imageURL).fadeIn(1000);
        });

    }); // end click

    // move the focus to the first link
    $("li:first-child a").focus();
    $("#image").hide().fadeIn(1000);
    $("#caption").hide().fadeIn(1000);
}); // end ready