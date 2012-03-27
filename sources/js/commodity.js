$(document).ready(function() {
  $.fn.isChildAndSelfOf = function(b) {
    return (this.closest(b).length > 0);
  };
    /* cycle 轮播 {{{ */
    $('#commodity-cycle') 
    .cycle({ 
        fx:        'fade', 
        speed:     'fast', 
        timeout:   3000, 
        pager:     '#commodity-nav',
        slideExpr: 'img'
    });/* }}} */
	$('.commodity-switch-tabs > li').mouseover(function() {/* tab 鼠标经过切换 切换 {{{ */
	  var that = $(this);
	  $(this).addClass('current').siblings().removeClass('current');
	  var idx = $('.commodity-switch-tabs > li').index(this);
	  $('.commodity-switch-blocks > li:eq(' + idx + ')').addClass('current').siblings().removeClass('current');
	  $(document).mouseover(function(event) {
		if(!$(event.target).isChildAndSelfOf('#commodity-hover') && !$(event.target).isChildAndSelfOf('#commodity-vertical-menu')) {
		  setTimeout(function() {
			that.removeClass('current');
			var idx = $('.commodity-switch-tabs > li').index(that);
			$('.commodity-switch-blocks > li:eq(' + idx + ')').removeClass('current');
		  }, 500);
		}
		return false;
	  });
	  return false;
	});
});
