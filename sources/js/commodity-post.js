$(document).ready(function() {
  $(".carousel").jCarouselLite({/* 商品切换列表 前翻后翻 {{{ */
    visible: 4,
    btnNext: ".next",
    btnPrev: ".prev"
  });/* }}} */

  $('.carousel > ul > li').click(function() {/* 商品点击切换效果 {{{ */
    $(this).addClass('current').siblings().removeClass('current');
    var index = $('.carousel > ul > li').index(this);
    if(index >= 10)
      var idx = index - 10;
    else
      var idx = index - 4;
    $('.product-view > li:eq(' + idx + ')').addClass('current').siblings().removeClass('current');
    return false;
  });/* }}} */

  $('.carousel-block a.prev').hover(function() {/* 简单的 切换按钮样式 {{{ */
    $(this).css('background-position', '-81px -61px');
  }, function() {
    $(this).css('background-position', '-53px -61px');
  });

  $('.carousel-block a.next').hover(function() {
    $(this).css('background-position', '-93px -61px');
  }, function() {
    $(this).css('background-position', '-66px -61px');
  });/* }}} */

  $('.post-switch-tabs > li').mouseover(function() {/* 咨询tab 切换 {{{ */
    $(this).addClass('current').siblings().removeClass('current');

    var idx = $('.post-switch-tabs > li').index(this);
    $('.post-switch-blocks > li.switch-li:eq(' + idx + ')').addClass('current').siblings().removeClass('current');
    return false;
  });/* }}} */
});
