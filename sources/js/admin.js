$(document).ready(function() {
  $('.admin-sidebar-block h2').toggle(function() {
    $(this).parents('.admin-sidebar-block').find('ul').fadeOut('slow');
  }, function() {
    $(this).parents('.admin-sidebar-block').find('ul').fadeIn('slow');
  });
});
