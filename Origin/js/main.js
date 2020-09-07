$(function(){
// ---- 各セクションへのジャンプ ----
let shiftTime = 800;
const $margin = 10;

// ---- 関数群 ----
const ToTop = (from)=>{
  $(from).removeClass('active');
  setTimeout(function(){
    $(from).removeClass('active');
    $('#top,.nav-top').addClass('active');
    $('html,body').stop().animate({
      scrollTop:0
    },1);
  },shiftTime);
}

const ToAbout = (from)=>{
  $(from).removeClass('active');
  setTimeout(function(){
    $(from).removeClass('active');
    $('#about,.nav-about').addClass('active');
    $('html,body').stop().animate({
      scrollTop:$margin
    },1);
  },shiftTime);
}

const ToSkill = (from)=>{
  $(from).removeClass('active');
  setTimeout(function(){
    $(from).removeClass('active');
    $('#skill,.nav-skill').addClass('active');
    $('html,body').stop().animate({
      scrollTop:$margin
    },1);
  },shiftTime);
}

const ToContact = (from)=>{
  $(from).removeClass('active');
  setTimeout(function(){
    $(from).removeClass('active');
    $('#contact,.nav-contact').addClass('active');
    $('html,body').stop().animate({
      scrollTop:$margin
    },1);
  },shiftTime);
}


// ---- #introduceからの導入部分 ----
$('.intro-btn').click(function(){
  $('#introduce').fadeOut(1500);
  setTimeout(function(){
    $('#top,.nav-top').addClass('active');
    $('html,body').stop().animate({
        scrollTop:0
    },1);
    $('#path').css({
        animation: 'pathOut 1s ease-out forwards'
    });
  },2500);
});


// ---- スクロールによるページの遷移 ----
$(window).scroll(function(){
  shiftTime = 2000;

  let scr = $(this).scrollTop();
  // ---- #top => #about ----
  if($('#top').hasClass('active')){
    if(scr > 0){
      ToAbout('#top,.nav-top');
    }
  }
  // ---- #about => #top or #skill ----
  if($('#about').hasClass('active')){
    if(scr > $margin){
      ToSkill('#about,.nav-about');
    }else if (scr < $margin){
      ToTop('#about,.nav-about');
    }
  }
  // ---- #skill => #about or #contact ----
  if($('#skill').hasClass('active')){
    if(scr > $margin){
      ToContact('#skill,.nav-skill');
    }else if (scr < $margin){
      ToAbout('#skill,.nav-skill');
    }
  }
  // ---- #conatct => #skill ----
  if($('#contact').hasClass('active')){
    if (scr < $margin){
      ToSkill('#contact,.nav-contact');
    }
  }
});


// ---- navのクリックによるページの遷移 ----
$('.nav-top,#to-top').click(function(){
  shiftTime = 1500;
  ToTop('nav > span,section');
});

$('.nav-about,#to-about').click(function(){
  shiftTime = 1500;
  ToAbout('nav > span,section');
});

$('.nav-skill,#to-skill').click(function(){
  shiftTime = 1500;
  ToSkill('nav > span,section');
});

$('.nav-contact,#to-contact').click(function(){
  shiftTime = 1500;
  ToContact('nav > span,section');
});


// ---- portfolioのスライドショー ----
let indexBefor = 0;
let indexAfter = 1;
const $hexgonInnerImage = $('.hexagon__inner-image').find('li');
const imageLength = $hexgonInnerImage.length;
const imageShift = ()=>{
  $hexgonInnerImage.eq(indexBefor).removeClass('selected');
  $hexgonInnerImage.eq(indexAfter).addClass('selected');
  indexBefor = indexAfter;
  $('#index-number').text(indexBefor + 1)
}

$('#index-next').click(function(){
  indexAfter = (indexBefor + 1) % imageLength;
  imageShift();
});

$('#index-prev').click(function(){
  if(indexBefor === 0){
    indexAfter = imageLength - 1;
  }else{
    indexAfter = indexBefor - 1;
  }
  imageShift();
});

// ---- portfolio-linkのhoverイベント ----
$('.portfolio-link').hover(function(){
  $('.under-line').toggleClass('hover');
});


// ---- contactのカルーセルパネル  ----
const $panels = $('#contact-means');
const $slideWidth = $panels.find('li').width();
let flag = true;
const Shift = ()=>{
  $panels.prepend($('.panel').eq(2));
  $panels.css({left: -$slideWidth});
}

$panels.find('li').eq(0).addClass('selected');

// ----次へボタン----
$('#next').click(function(){
  shiftTime = 1000;

  if(flag){
    flag = false;

    $panels.find('li').removeClass('selected');
    $panels.find('li').eq(1).addClass('selected');
    $panels.animate({
      left: -$slideWidth
    },shiftTime,function(){
      $panels.append($('.panel').eq(0));
      $panels.css({left:0});

      flag = true;
    });
  }
});

// ----前へボタン----
$('#prev').click(function(){
  shiftTime = 1000;

  if(flag){
    flag = false;
    Shift();
    setTimeout(function(){
      $panels.find('li').removeClass('selected');
      $panels.find('li').eq(0).addClass('selected');
    },100);
    $panels.animate({
      left: 0
    },shiftTime,function(){
      flag = true;
    });
  }
});


// ---- portfolioページのモーダルウィンドウ----
$('ul#design-skills > li').find('.hexagon__inner-image').click(function(){
  let designIndex = $('ul#design-skills > li').index(this.closest('li'));

  $('.image-wrapper').scrollTop(0);
  $('.image-wrapper').find('img').removeClass('show');
  $('.image-wrapper').find('img').eq(designIndex).addClass('show');
  $('#modal').addClass('active');
});

$('.modal-close').click(function(){
  $('#modal').removeClass('active');
});

});
