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
        from: 2,
        grid: true,
        from_fixed: true
    });
});