$(function () {
    //get the welcome msg element
    var $all_msg = $('.welcome-caption');
    //get a list of letters from the welcome text
    var $wordList = $('.welcome-caption').html().split("");
    //clear the welcome text msg
    $('.welcome-caption').html("");
    //loop through the letters in the $wordList array
    var tagGoing = "";
    $.each($wordList, function (idx, elem) {

        if (elem == "<") {
            //if we encountered this symbol it means a tag started
            tagGoing += elem;
        } else if (elem == ">") {
            //if we encountered this symbol it means a tag closed
            tagGoing += elem;
            //create the tag from the collected parts and append it
            //to the output html:
            var $foundTag = $(tagGoing).appendTo($all_msg);
            $foundTag.css({
                opacity: 0
            });
            $foundTag.delay(idx * 35);
            $foundTag.animate({
                opacity: 1
            }, 1100);

            //reset the tag collector:
            tagGoing = "";
        } else {
            //if we are inside a tag
            if (tagGoing != "") {
                //if we are inside a tag, then just append the
                //current character to the output html
                tagGoing += elem;
            } else {

                //create a span for the letter and set opacity to 0
                var newEL = $("<span/>").text(elem).css({
                    opacity: 0
                });
                //append it to the welcome message
                newEL.appendTo($all_msg);
                //set the delay on the animation for this element
                newEL.delay(idx * 35);
                //animate the opacity back to full 1
                newEL.animate({
                    opacity: 1
                }, 1100);
            }
        }
    });

});


$(document).ready(function () {
    $('.slider-images').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
    });
});

$(document).ready(function () {
    $('.header').hide();
    $('.header').slideDown(3500);
});



