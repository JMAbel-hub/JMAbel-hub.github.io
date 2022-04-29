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
        from: 1,
        grid: true,
        from_fixed: true
    });
    // Gets the default content for the page from a json
    $.ajax({ 
        type: "get",
        url: "json_files/default.json",
        beforeSend: function() {
            $("#content").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#content").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#content").append(
                        "<h3>" + value.section + "</h3>" + 
                        "<p>" + value.content + "</p>" +
                        "<figure class='center'>" +
                        "<a href=" + value.picture + ">" +
                        "<img class='zoom' src = '" + value.picture + "' alt=example of a default and full constructor>" +
                        "</a>" + 
                        "<figcaption>" + value.caption + "</figcaption>" + 
                        "</figure>" + "<hr>"
                    );
                });
            });
        }
    });
});