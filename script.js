$(function() {
  $('.menu-icon').click(function() {
    $('.menu-nav-wrapper').slideToggle();
  });
});

$(function() {
  $('.wheel-nav').click(function() {
    $('.wheel-field').slideToggle();
  });
});

$(function() {
  $(window).scroll(function(){
    var y = $(this).scrollTop();
    $('#ls-bg').css('background-position', '0 ' + parseInt( -y / 4 ) + 'px');
    $('#ls').css('background-position', '0 ' + parseInt( -y / 2 ) + '%');
    //$('#bg2-ls-img').css('background-position', '0 ' + parseInt( -y / 3 ) + 'px');
    //$('#safety-bg').css('background-position', '0 ' + parseInt( -y / 7 ) + 'px');
    //$('#bg02').css('background-position', '0 ' + parseInt( -y / 50 ) + 'px');
    //$('#bg03').css('background-position', '0 ' + parseInt( -y / 200 ) + 'px');
  });
});

$(function(){
  $(window).scroll(function (){
    $('.effect-fade').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('effect-scroll');
      }
    });
  });
});

window.addEventListener('scroll',function(){
  header_scroll();
  parallax('top-wrapper-block',3,0);
});

function header_scroll(){
  var my_header = document.getElementsByTagName('header')[0];
  var scroll_height = window.pageYOffset;
  if(scroll_height > 400){
    my_header.className = 'header header-scroll';
  }
  else {
    my_header.className = 'header';
  }
}

function parallax(elem,speed,number){
  var target = document.getElementsByClassName(elem)[number];
  var scroll_value = window.pageYOffset;
  if(scroll_value <= 700){
    target.style.transform = 'translateY('+(-scroll_value/speed)+'px)';
  }
  else {
    return;
  }
}
