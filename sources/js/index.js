$(document).ready(function() {
  $('#coin-slider').coinslider({ 
    width: 1000, 
    height: 327,
    navigation: false,
    delay: 5000,
    navigation: true,
    links: false,
    sDelay: 30, // delay beetwen squares in ms
    titleSpeed: 500, // speed of title appereance in ms
    hoverPause: true // pause on hover
  });
  $('.cs-buttons').hide();
});
