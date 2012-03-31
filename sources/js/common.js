  $.fn.toggleInputText = function() { /* toggle input {{{ */
    var v = $(this).val(); 
    if($(this).val() == "")
      $(this).val(v).css({'color' : '#898888'});
    $(this).focus(function(){
      $(this).val('').select().css({'color' : '#000'});
    }).blur(function(){
      if($(this).val()==""){
         $(this).val(v).css({'color' : '#898888'});
      }
    });
  };/* }}} */
$(document).ready(function() {
  $('.header-search-tabs > li').click(function() {/* 首页 搜索框 切换 {{{ */
    $(this).addClass('current').siblings().removeClass('current');

    var idx = $('.header-search-tabs > li').index(this);
    $(this).parents('#header-search').css(
      'background', 'url("./sources/images/base/header-search-' + idx + '.png") no-repeat' 
    );
    $('.header-search-blocks > li:eq(' + idx + ')').addClass('current').siblings().removeClass('current');
    return false;
  });/* }}} */
  $('.switch-tabs > li').mouseover(function() {/* tab 鼠标经过切换 切换 {{{ */
    $(this).addClass('current').siblings().removeClass('current');

    var idx = $('.switch-tabs > li').index(this);
    $('.switch-blocks > li:eq(' + idx + ')').addClass('current').siblings().removeClass('current');
    return false;
  });/* }}} */

  $('.top-menu-text').toggleInputText();
  $('.header-search-text').toggleInputText();
  $('.footer-links-text').toggleInputText();
});
