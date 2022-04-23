$(document).ready(function(){
    // Gets the json file 
    $.getJSON("facultyList.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                // Puts json information into id faculty
                $("#faculty").append(
                    "<img src=" + value.image + ">" + 
                    "<h2>" + value.full_name + "</h2>" + 
                    "<h3>" + value.department + "</h3>" +
                    "<p>" + value.bio + "</p>"
                );
            });
        });
    });
});
