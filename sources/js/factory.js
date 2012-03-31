$(document).ready(function() {
  $('.factory-search-text').toggleInputText();

  $('.list-sidebar ul li').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });

  $('.list-cont-list dd').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
});
