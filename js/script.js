$(document).ready(function() {
    $('.right_title').click(function(event) {
        if ($('.main_right').hasClass('one')) {
            $('.right_title').not($(this)).removeClass('active');
            $('.right_statistic').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
$(document).ready(function() {
    $('.right_lesson-name').click(function(event) {
        if ($('.right_type-lessons').hasClass('two')) {
            $('.right_lesson-name').not($(this)).removeClass('active');
            $('.invisible').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
