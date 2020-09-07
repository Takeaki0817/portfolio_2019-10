$(function(){
  const $items = $('#content-items');
  const $page = $('#content-items li');
  const shiftWidth = $page.outerWidth(true);
  const shiftTime = 800;


  // ----次へ----
  const Next = () => {
    $items.stop().animate({
      left: -shiftWidth
    },function(){
      $items.append($items.find('li').eq(0));
      $items.css({left:0});
      $items.find('li').eq(0).removeClass('center');
      $items.find('li').eq(1).addClass('center');
    });

  }

  // ----前へ----
  const Prev = () => {
    $items.animate({
      left: 0
    },function(){
      $items.prepend($items.find('li').eq(length-1));
      $items.css({left: -shiftWidth});
      $items.find('li').eq(3).removeClass('center');
      $items.find('li').eq(2).addClass('center');
    });

  }

  // ----次へボタン----
  $('#next').click(function(){
    Next();
  });

  // ----前へボタン----
  $('#prev').click(function(){
    Prev();
  });

  // -----自動送り----
  setInterval(Next,6000);
});


$(function(){
  $('.open').click(function(){
    $(this).fadeOut();
    $('header').slideDown();
  })

  $('.close').click(function(){
    $('.open').fadeIn();
    $('header').slideUp();
  });
});
