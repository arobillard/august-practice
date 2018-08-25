$('.tog-nav-holder').on('click', function () {
  var navOn = $('.nav-main').hasClass('nav-open');
  $(this).toggleClass('tog-nav-open');
  if (navOn) {
    $('.nav-main').removeClass('nav-open');
    $('.nav-main').addClass('nav-close');
  }else {
    $('.nav-main').removeClass('nav-close');
    $('.nav-main').addClass('nav-open');
  }
});

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 450) {
         $('.nav-main').removeClass('nav-at-top')
         $('.tog-nav-holder').removeClass('nav-at-top')
      }
      if ($(this).scrollTop() < 450) {
         $('.nav-main').addClass('nav-at-top')
         $('.tog-nav-holder').addClass('nav-at-top')
      }
   });
});
