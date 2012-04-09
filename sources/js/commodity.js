$(document).ready(function() {
  $('.list-search-text').toggleInputText();
  $('#filter-city').toggleInputText();

  $.fn.isChildAndSelfOf = function(b) {
    return (this.closest(b).length > 0);
  };

	$('.list-select-brand a span.pa').click(function() {
		$(this).parents('a.pl').remove();
		return false;	
	});
	$('.list-select-brand a span.pa').hover(function() {
		$(this).parents('a.pl').addClass('bd1s3264c8').removeClass('bd1scccccc');
		return false;	
	}, function() {
		$(this).parents('a.pl').removeClass('bd1s3264c8').addClass('bd1scccccc');
		return false;	
	});
	$('.search-menu').toggle(function() {/* 点击所有分类 {{{ */
		if($('.item-list').is(':visible'))
      $('.item-list').hide();
		$('.sub-menu').show();
		$(document).click(function(event) {
			if(!$(event.target).isChildAndSelfOf('#filter-cats'))	
			$('.sub-menu').hide(); 
		return false;
	});
	}, function(){
		if($('.item-list').is(':visible'))
      $('.item-list').hide();
		if($('.sub-menu').is(':visible'))
			$('.sub-menu').hide();
		else
			$('.sub-menu').show();
	});/* }}} */
	$('.location').toggle(function() {/* 点击所在地 {{{ */
		if($('.sub-menu').is(':visible'))
      $('.sub-menu').hide();
		$('.item-list').show();
		$(document).click(function(event) {
			if(!$(event.target).isChildAndSelfOf('#filter-location'))	
			$('.item-list').hide(); 
		return false;
	});
	}, function(event){
		if($('.sub-menu').is(':visible'))
      $('.sub-menu').hide();
		if($('.item-list').is(':visible') && event.target.id != 'filter-city')
			$('.item-list').hide();
		else
			$('.item-list').show();
	});/* }}} */

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
		  }, 10);
		}
		return false;
	  });
	  return false;
	});/* }}} */
});
