$(document).ready(function() {
  
  $(".nav-link").click(function(){
    $(".collapse").collapse("toggle");
  });
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 970) {
      $('.navbar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 971) {
      $('.navbar').removeClass('navbar-fixed-top');
    }

  });
});

$(".navbar-dark ul li a[href^='#']").on('click', function(e) {

  e.preventDefault();

  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 900, function() {

    window.location.hash = hash;
  });

});

$("#section-parallax .col-sm-8 a[href^='#']").on('click', function(e) {

  e.preventDefault();

  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 300, function() {

    window.location.hash = hash;
  });

});

$(".footer .scroll-to-top-button a[href^='#']").on('click', function(e) {

  e.preventDefault();

  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 300, function() {

    window.location.hash = hash;
  });

});

$('.js-wp-1').waypoint(function(direction) {
  $('.js-wp-1').addClass('animated fadeInDown');
}, {
  offset: '50%'
});

$('.js-wp-2').waypoint(function(direction) {
  $('.js-wp-2').addClass('animated fadeInLeft');
}, {
  offset: '50%'
});

$('.js-wp-3').waypoint(function(direction) {
  $('.js-wp-3').addClass('animated fadeInRight');
}, {
  offset: '50%'
});

$('.js-wp-4').waypoint(function(direction) {
  $('.js-wp-4').addClass('animated fadeInUp');
}, {
  offset: '50%'
});

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 2000);
  }
});