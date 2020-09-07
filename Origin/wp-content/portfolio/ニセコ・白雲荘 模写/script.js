// --header.js--
// --headerのfadein/out(scrollで切り替え)--
let scr;
$(function(){
  const $contentHeight = $('#content').offset().top;
  $(window).scroll(function(){
    scr = $(window).scrollTop();
    if(scr >= $contentHeight){
      $('header').addClass('fixed-header');
      $('.logo-white').addClass('hide');
      $('.logo-gray').removeClass('hide');
      $('.header-menu a,.header-menu span,.jp,.en').css({
        color:'#626f7f'
      });
    } else{
      $('header').removeClass('fixed-header');
      $('.logo-gray').addClass('hide');
      $('.logo-white').removeClass('hide');
      $('.header-menu a,.header-menu span,.jp,.en').css({
        color:''
      });
    }
  });
});


// --top.js--
// --写真のfadein/out--
$(function(){
  let i = 0;
  const $backgroundImg = $('.img-list ul li');
  const bgNums = $backgroundImg.length;
  $backgroundImg.hide();

  const bgSlider = function(){
    const fadeTime = 1500;
    $backgroundImg.eq(i-1).fadeOut(fadeTime);
    $backgroundImg.eq(i).fadeIn(fadeTime);
    if(i === bgNums){
      $backgroundImg.eq(0).fadeIn(fadeTime);
      setTimeout(bgSlider,1);
      i = 0;
    }else{
      i ++;
      setTimeout(bgSlider,3500);
    }
  }

  bgSlider();
});


$(function(){
  // --雪を降らせる--
    $('#top').snowfall({
        // 雪の量 (数値)
        flakeCount : 50,
        // 色 (RGB)
        flakeColor : "rgba(255,255,255)",
        // z-indexの値
        flakeIndex : "888",
        // 最小サイズ （数値）
        minSize : 1,
        // 最大サイズ（数値）
        maxSize : 5,
        // 最低速度（数値）
        minSpeed : 1,
        // 最高速度（数値）
        maxSpeed : 3,
        // 雪の形を丸にする（boolean）
        round : false,
        // 影をつける（boolean）
        shadow : false
    });
});


$(function(){
  // --more.js--
  (function($){
    $.fn.moveArrow = function(){
      $(this).hover(
        function(){
          $(this).find('img').css({
            left:'10px',
            transition:'.3s'
          });
          $(this).find('p').css({
            color:'#C1A151',
            transition:'.3s'
          });
        },
        function(){
          $(this).find('img').css({
            left:'0',
            transition:'.3s'
          });
          $(this).find('p').css({
            color:'#626f7f',
            transition:'.3s'
          });
        }
      );
    };
  })(jQuery);

  $('.infomation .more').moveArrow();

  $('.instagram .more').moveArrow();
});


// --about-hakuunsou.js--
$(function(){
  scr = $(window).scrollTop();
  const windowHeight = $(window).innerHeight();
  const fadeInBottom = $('#about-hakuunsou').offset().top + 255 ;
  const fadeInHeight = fadeInBottom - windowHeight;
  $(window).scroll(function(){
    if(scr >= fadeInHeight){
      $('.bg2').fadeIn();
    }
  });
});


// --links.js--
$(function(){
  $('#links > div').hover(
    function(){
      $(this).find('.link-bg').css({
        transform: 'scale(1.05)',
        transition: '.8s'
      });
    },
    function(){
      $(this).find('.link-bg').css({
        transform: 'scale(1.0)',
        transition: '.8s'
      });
    });
});
