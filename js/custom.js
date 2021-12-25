$(document).ready(function(){
    $(".img-slider").slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
    });

    $(".all-pic").slick({
        autoplay:true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding: "0px",
        asNavFor:".text-item",
    });

    $(".text-item").slick({
        arrows:false,
        asNavFor:".all-pic"
    });

    $("#banner").slick({
        autoplay:false,
        slidesToShow:1,
        slidesToScroll:1,
        dots:true,
        arrows:true,
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
    });
});