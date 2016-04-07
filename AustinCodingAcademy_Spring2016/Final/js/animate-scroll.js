$(document).ready(function () {

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 430) {

            $('#writers').addClass('animated fadeInRight');
        }
        console.log(verticalScroll);

    });


    $('.zoompic1').hover(function () {

        $('.bigpic1').removeClass('flyaway');
        $('.bigpic2').addClass('flyaway');
        $('.bigpic3').addClass('flyaway');
        $('.bigpic4').addClass('flyaway');


    });
    $('.zoompic2').hover(function () {

        $('.bigpic2').removeClass('flyaway');
        $('.bigpic1').addClass('flyaway');
        $('.bigpic3').addClass('flyaway');
        $('.bigpic4').addClass('flyaway');


    });
    $('.zoompic3').hover(function () {

        $('.bigpic3').removeClass('flyaway');
        $('.bigpic2').addClass('flyaway');
        $('.bigpic1').addClass('flyaway');
        $('.bigpic4').addClass('flyaway');


    });
    $('.zoompic4').hover(function () {

        $('.bigpic4').removeClass('flyaway');
        $('.bigpic2').addClass('flyaway');
        $('.bigpic3').addClass('flyaway');
        $('.bigpic1').addClass('flyaway');


    });

});