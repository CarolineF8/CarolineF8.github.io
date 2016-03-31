$(document).ready(function () {

    //sandwhich

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll > 610) {

            $('.my_sandwhich').addClass('animated flip');

        }

        console.log(verticalScroll);

    });

    //four items

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll > 1050) {

            $('#my_1').addClass('animated fadeInDownBig');
            $('#my_1').removeClass('hide_me');

            $('#my_2').addClass('animated fadeInRightBig');
            $('#my_2').removeClass('hide_me');

            $('#my_3').addClass('animated fadeInUpBig');
            $('#my_3').removeClass('hide_me');

            $('#my_4').addClass('animated fadeInLeftBig');
            $('#my_4').removeClass('hide_me');

        }

    });

});