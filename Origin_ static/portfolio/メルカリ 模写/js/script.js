$(function(){
  let windowWidth = $(window).width();
  const headerHeight = $('#header-wrapper').outerHeight(true) + $('#tags-wrapper').outerHeight(true);
  if(windowWidth <= 765){
    // ----responsiveDesignでheaderの高さ分margin-top----
    $('main').css({
      'padding-top':headerHeight
    });

    // ----responsiveDesignで#main-bottomをリンクにする----
    $('#main-bottom').wrap('<a href="#">');
  }else{
    // ----tagの検索機能の出し入れ----
    $('.category').hover(function(){
      $('.category-first').toggleClass('hide');
    });

    $('.category-first li').hover(function(){
      $(this).find('.category-second').toggleClass('hide')
    });

    $('.category-second li').hover(function(){
      $(this).find('.category-third').toggleClass('hide');
    });

    $('.brand').hover(function(){
      $('.brand-first').toggleClass('hide');
    });
  }





// ----カルーセルパネル----
  const panelWidth = $('.panel').width();
  const $panels = $('#panels');

  // ----panels-navの切り替え----
  const $firstPanel = $('.first-page').parent('a').parent('.panel');
  const $secondPanel = $('.second-page').parent('.panel');

  const toggleNav = ()=>{
    if($firstPanel.index() === 0){
      $('.first-nav').removeClass('selected');
      $('.second-nav').addClass('selected');
    }else if($secondPanel.index() === 0){
      $('.second-nav').removeClass('selected');
      $('.first-nav').addClass('selected');
    }
  }

  // ----navにhoverした時の動き----
  $('.first-nav').hover(function(){
    $('.second-nav').removeClass('selected');
    $(this).addClass('selected');
    if($secondPanel.index() == 0){
      Prev();
    }
  },function(){
    ;
  });

  $('.second-nav').hover(function(){
    $('.first-nav').removeClass('selected');
    $(this).addClass('selected');
    if($firstPanel.index() == 0){
      Next();
      setTimeout(automaticCorrection,5000);
    }
  },function(){
    ;
  });


  let flag = true;
  // ----次へ----
  const Next = ()=>{
    toggleNav();
    if(flag){
      flag = false;

      $panels.animate({
        left: -panelWidth
      },function(){
        $panels.append($('.panel').eq(0));
        $panels.css({left:0});

        flag = true;
      });
    }
  }


  $('#next').click(function(){
    Next();
    setTimeout(automaticCorrection,5000);
  });

  // ----前へ----
  const Shift = ()=>{
    $panels.prepend($('.panel').eq(1));
    $panels.css({left: -panelWidth});
  }

  const Prev = ()=>{
    if(flag){
      toggleNav();
      flag = false;
      Shift();
      $panels.animate({
        left: 0
      },function(){
        flag = true;
      });
    }
  }

  $('#prev').click(function(){
    Prev();
    setTimeout(automaticCorrection,5000);
  });

  // ----自動的に1枚目に----
  automaticCorrection = ()=>{
    if($secondPanel.index() === 0){
      Next();
    }
  }
});
