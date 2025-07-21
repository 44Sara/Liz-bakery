

// Sticky Header
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $('.sticky-header').addClass('sticky');
    } else {
        $('.sticky-header').removeClass('sticky');
    }
});
