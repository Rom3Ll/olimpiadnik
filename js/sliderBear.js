$(document).ready(function (){
    $(".slider").slick({
        arrows: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 0, 
        slidesToShow:5,
    });
});
