(function ($) {
    "use strict";
    // Initiate the wowjs
    new WOW().init();

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
   
})(jQuery);

