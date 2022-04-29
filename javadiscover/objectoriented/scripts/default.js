$(document).ready(function() {
    // Zoom plugin
    $('.zoom').wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom({ 
        // Magnify 150% and is enabled on click 
        magnify: 1.5,
        on: 'click'
    });
    // Slider plugin
    $("#range").ionRangeSlider({
        type: "single",
        min: 1,
        max: 5,
        from: 5,
        grid: true,
        from_fixed: true
    });
    $("#solution_button").click(function(){
        $.ajax({ 
            type: "get",
            url: "json_files/solution.json",
            beforeSend: function() {
                $("#solution").html("Loading...");
            },
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                $("#solution").html("");
                $.each(data, function() {
                    $.each(this, function(key, value) {
                        $("#solution").append(
                            "<figure class='center'>" +
                            "<a href=" + value.picture + ">" +
                            "<img class='zoom' src = '" + value.picture + "' alt=example of a default and full constructor>" +
                            "</a>" + 
                            "<figcaption>" + value.caption + "</figcaption>" + 
                            "</figure>" +
                            "<p>" + value.explanation + "</p>"
                        );
                    });
                });
            }
        });
    });
});