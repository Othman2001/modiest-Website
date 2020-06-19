$(function() {
    $(window).scroll(function () {
   var scroll = $(window).scrollTop();
   if(scroll >400 ){
       $('.navbar').addClass('add');
   }
   if(scroll < 40){
       $('.navbar').removeClass('add');
   }
    });

    $(".num").counterUp({delay:10,time:1000});
    
});