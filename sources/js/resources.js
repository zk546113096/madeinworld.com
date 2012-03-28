$(document).ready(function() {
  $('.resources-sidebar > ul > li > a').hover(function() {
    $(this).parent('li').addClass('li-hover');
  }, function() {
    $(this).parent('li').removeClass('li-hover');
  });
});
