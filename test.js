// APPROACH 2
// classed effect
$(document).ready(function () {
    if ($(window).scrollTop() === 0) {
        $('.icon-scroll .icon-up').addClass('inactive-icon');
        $('.icon-scroll .icon-down').addClass('scrollDown');
    }

    let lastScrollTop = $(window).scrollTop();

    $(window).on('scroll', function () {
        let currentScrollTop = $(window).scrollTop();

        if (currentScrollTop === 0) {
            $('.icon-scroll .icon-up').addClass('inactive-icon');
            $('.icon-scroll .icon-down').addClass('scrollDown');

        } else if (currentScrollTop + $(window).height() >= $(document).height()) {
            $('.icon-scroll .icon-down').addClass('inactive-icon');
            $('.icon-scroll .icon-up').addClass('scrollUp');
            $('.icon-scroll .icon-down').removeClass('scrollDown');

        } else if (currentScrollTop > lastScrollTop) {
            $('.icon-scroll .icon-up').removeClass('inactive-icon');
            $('.icon-scroll .icon-up').addClass('scrollUp');

        } else if (currentScrollTop < lastScrollTop) {
            $('.icon-scroll .icon-down').removeClass('inactive-icon');
            $('.icon-scroll .icon-up').addClass('scrollUp');
            $('.icon-scroll .icon-down').addClass('scrollDown');
        }

        lastScrollTop = currentScrollTop;
    });
});


$(document).ready(function() {
    let scrollInterval;

    function startScrolling(direction) {
        let step = 10; // Number of pixels to scroll in each step
        scrollInterval = setInterval(function() {
            let scrollTop = $(window).scrollTop();
            if (direction === 'up') {
                $('html, body').scrollTop(scrollTop - step);
            } else if (direction === 'down') {
                $('html, body').scrollTop(scrollTop + step);
            }
        }, 10); // Adjust the smoothness
    }

    function stopScrolling() {
        clearInterval(scrollInterval);
    }

    // Bind events for scrolling up
    $('.icon-up').on('mousedown touchstart', function() {
        startScrolling('up');
    }).on('mouseup mouseleave touchend touchcancel', function() {
        stopScrolling();
    });

    // Bind events for scrolling down
    $('.icon-down').on('mousedown touchstart', function() {
        startScrolling('down');
    }).on('mouseup mouseleave touchend touchcancel', function() {
        stopScrolling();
    });
});