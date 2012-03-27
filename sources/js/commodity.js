$(document).ready(function() {
    /* cycle 轮播 {{{ */
    $('#commodity-cycle') 
    .cycle({ 
        fx:        'fade', 
        speed:     'fast', 
        timeout:   3000, 
        pager:     '#commodity-nav',
        slideExpr: 'img'
    });/* }}} */
  recursive_mouseout($('.commodity-switch-tabs'));
  //$('.commodity-switch-tabs > li').hover(function() {/* tab 鼠标经过切换 切换 {{{ */
  //  $(this).addClass('current').siblings().removeClass('current');

  //  var idx = $('.commodity-switch-tabs > li').index(this);
  //  $('.commodity-switch-blocks > li:eq(' + idx + ')').addClass('current').siblings().removeClass('current');
  //  return false;
  //}, function() {
  //  var that = $(this);
  //  setTimeout(function() {
  //    that.removeClass('current');
  //    var idx = $('.commodity-switch-tabs > li').index(that);
  //    $('.commodity-switch-blocks > li:eq(' + idx + ')').removeClass('current');
  //  }, 500);

  //  return false;
  //});/* }}} */


    
});

/**
 * Recursive bind mouseout event
 */
function recursive_mouseout(elm) {
  elm.parent().bind('mouseover', function(e) {
    //TODO 
    console.log("mouse out");
  });
  console.log(elm.get(0).tagName);
  if (elm.get(0).tagName == 'BODY') {
    return true;
  } else {
    recursive_mouseout(elm.parent());
  }
}
