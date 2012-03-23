$(document).ready(function() {
  $('.post-search-text').toggleInputText();
    /* cycle 轮播 {{{ */
    $('#information-cycle') 
    .cycle({ 
        fx:        'fade', 
        speed:     'fast', 
        timeout:   3000, 
        pager:     '#information-nav',
        slideExpr: 'img'
    });/* }}} */
});
