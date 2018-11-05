$(function() {
  $('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });

  $('*[data-js="clip-it"]').ClipPath('25% 0%, 100% 0%, 75% 100%, 0% 100%');


});


$('.my-select').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  autoplaySpeed: 2000,
  nextArrow:$('.canvass-btn-next'),
  prevArrow:$('.canvass-btn-prew') 
});

$('.my-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: true, 
  appendDots:$(".dots-container"), 
  arrows: false,
});


$('.left-arrow-slide').click(function(){
  $('.my-slider').slick('slickPrev');
})

$('.right-arrow-slide').click(function(){
  $('.my-slider').slick('slickNext');
})




