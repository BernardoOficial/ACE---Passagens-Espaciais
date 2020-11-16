const carouselFirst = $('.container__carousel__content');

carouselFirst.owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
});