$(document).ready(function() {
  $('.top-menu-text').toggleInputText();
  $('.header-search-text').toggleInputText();
  $('.footer-links-text').toggleInputText();

  $('.header-search-tabs > li').click(function() {/* 首页 搜索框 切换 {{{ */
    $(this).addClass('current').siblings().removeClass('current');

    var idx = $('.header-search-tabs > li').index(this);
    $(this).parents('#header-search').css(
      'background', 'url("./sources/images/base/header-search-' + idx + '.png") no-repeat' 
    );
    $('.header-search-blocks > li:eq(' + idx + ')').addClass('current').siblings().removeClass('current');
    return false;
  });/* }}} */

});
