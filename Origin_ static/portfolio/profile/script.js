$(function(){
  $(window).scroll(function(){
    var $scr = $(document).scrollTop();
    if (0<=$scr && $scr<=400) {
      $('.name').addClass('fadein').removeClass('fadeout');
    }else if(400<$scr) {
      $('.name').removeClass('fadein').addClass('fadeout');
    }
    if (430<=$scr && $scr<=920) {
      $('.hobby').addClass('fadein').removeClass('fadeout');
    }else if ($scr<430 || 920<$scr) {
      $('.hobby').removeClass('fadein').addClass('fadeout');
    }
    if (950<=$scr && $scr<=1440) {
      $('.dream').addClass('fadein').removeClass('fadeout');
    }else if ($scr<950 || 1440<$scr) {
      $('.dream').removeClass('fadein').addClass('fadeout');
    }
    if (1470<=$scr) {
      $('.reason').addClass('fadein').removeClass('fadeout');
    }else if (1470>$scr) {
      $('.reason').removeClass('fadein').addClass('fadeout');
    }
  });




  if (window.matchMedia( "(max-width: 750px) " ).matches) {
    $('#menu').click(function(){
      $(this).css('display','none');
      $('header').find('ul').fadeIn().css('display','flex')
    });
    $('.header-list').find('li').click(function(){
      $('header').find('ul').hide();
      $('#menu').css('display','inline-block');
    });
  }
});
