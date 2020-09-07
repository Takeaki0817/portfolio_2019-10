$(function(){
  $('.page img').hover(
    function(){
      let pageHeight = $(this)[0].scrollHeight;
      let scrollSpeed = pageHeight/600 + 's';
      let scrollBottom = -pageHeight + 570;
      $(this).css({
        'margin-top':scrollBottom,
        'transition':scrollSpeed,
        'transition-timing-function':'linear'
      });
    },
    function(){
      $(this).css({
        'margin-top':'0',
        'transition':'2s linear'
      });
    });

  $('.page-box').hover(
    function(){
      $(this).find('h2').addClass('stripe');
    },
    function(){
      $(this).find('h2').removeClass('stripe');
    });
});


$(function(){
  $('.pagenavi a').hover(function(){
    $(this).addClass('stripe');
  },
  function(){
    $(this).removeClass('stripe');
  });
});


$(function(){
  $('.scroll-top').click(function(){
    $('html,body').animate({
      scrollTop:'0'
    },1000);
  });
});
