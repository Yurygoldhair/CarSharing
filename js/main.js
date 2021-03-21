$(function () {
    $('.top__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
});