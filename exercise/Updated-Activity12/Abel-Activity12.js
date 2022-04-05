$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        randomStart:true,
        slideWidth: 500,
        slideMargin: 20,
        captions:true,
        speed:3000,
        pagerSelector:'#id_pager',
        pagerType:'short'
    });
});