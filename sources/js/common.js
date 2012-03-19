$(document).ready(function() {
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
  $('.switch-tabs > li').mouseover(function() {/* tab 鼠标经过切换 切换 {{{ */
    $(this).addClass('current').siblings().removeClass('current');

    var idx = $('.switch-tabs > li').index(this);
    $('.switch-blocks > li:eq(' + idx + ')').addClass('current').siblings().removeClass('current');
    return false;
  });/* }}} */
});
