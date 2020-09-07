$(function(){
  $('.fa-angle-double-down').click(function(){
    var position = $("main").offset().top;
    $("html,body").animate({
    scrollTop : position
    }, {
    queue : false
    });
  });
});
