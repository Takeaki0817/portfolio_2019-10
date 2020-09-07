$(function(){
  $('#scroll-top')
  .click(function(){
    $('html,body').animate({
      'scrollTop':0
    },900);
  });

  $(window).scroll(function(){
    var scr = $(window).scrollTop();
    if(scr >= 10){
      $('#scroll-top').fadeIn();
    }else{
      $('#scroll-top').fadeOut();
    }
  });

  $('.ToForm').click(function(){
    var formTop = $('#form').offset().top - 75;
    $('html,body').animate({
      'scrollTop':formTop
    },900)
  });

  (function($){
    $.fn.Accordion = function(){
      var $accordionAnswer = $(this).find('.accordion-answer');
      $(this).find('.accordion-label')
      .click(function(){
        if($accordionAnswer.hasClass('open')){
          $accordionAnswer.removeClass('open').slideUp();
        }else{
          $accordionAnswer.addClass('open').slideDown();
        }
        $(this).find('.fa-angle-up,.fa-angle-down').toggleClass('hide');
      })
      .hover(
        function(){
          $(this).find('h3').css('text-decoration','underline');
        },
        function(){
          $(this).find('h3').css('text-decoration','none');
        });
      }
  })(jQuery);

  $('#one').Accordion();

  $('#two').Accordion();

  $('#three').Accordion();

  $('#four').Accordion();

  $('#five').Accordion();

  $('#six').Accordion();

  $('#seven').Accordion();

  $('#eight').Accordion();

  $('#nine').Accordion();

  $('#ten').Accordion();

  $('#eleven').Accordion();

  $('#twelve').Accordion();

  $('#thirteen').Accordion();

  $('#fourteen').Accordion();

  $('#fifteen').Accordion();

});
