$(function() {
  $('.menu-icon').click(function() {
    $('.menu-nav-wrapper').slideToggle();
  });
});

$(function() {
  $(window).scroll(function(){
    var y = $(this).scrollTop();
    $('#ls-bg').css('background-position', '0 ' + parseInt( -y / 5 ) + 'px');
    $('#ls').css('background-position', '0 ' + parseInt( -y / 4 ) + '%');
    //$('#bg2-ls-img').css('background-position', '0 ' + parseInt( -y / 3 ) + 'px');
    //$('#safety-bg').css('background-position', '0 ' + parseInt( -y / 7 ) + 'px');
    //$('#bg02').css('background-position', '0 ' + parseInt( -y / 50 ) + 'px');
    //$('#bg03').css('background-position', '0 ' + parseInt( -y / 200 ) + 'px');
  });
});
