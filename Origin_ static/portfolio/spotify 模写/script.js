$(document).ready(function(){
  $('.bxslider').bxSlider({
    moveSlides:1,
    auto:true,
    prevSelector:'#prev',
    nextSelector:'#next',
    prevText:'',
    nextText:'',
    pause:5000,
    pager:false,
    controls:true,
    useCSS:false,
    infiniteLoop: true
  });
});
