$(document).ready(function () {

    $(window).scroll(function () {

        var verticalScroll = $(this).scrollTop();

        if (verticalScroll >= 430) {

            $('#writers').addClass('animated fadeInRight');
        }
        console.log(verticalScroll);

    });

});