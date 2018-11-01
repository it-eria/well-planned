$(function() {
  $('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });

  $('*[data-js="clip-it"]').ClipPath('25% 0%, 100% 0%, 75% 100%, 0% 100%');

  
});

