$(document).ready(function(){
   ///
    
    $('.mainmenu').mouseover(function(){
       $(this).children('div').css({"background-color":"orange"}); 
        $('.submenu').stop().slideUp();
        $(this).children('.submenu').stop().slideDown();
    });
    $('.mainmenu').mouseleave(function(){
       $(this).children('div').css({"background-color":"navy"}); 
        $('.submenu').stop().slideUp();
    });    
  //-------------------------------------//
 var num =0;
    $('.slide').eq(num).fadeIn('fast');
    
    var interval = setInterval(slide,2000);
    function slide(){
      $('.slide').eq(num).fadeOut('fast');
        if(num==2){
            num=0;
            $('.slide').eq(num).fadeIn('fast');
        }else{
            num++;
            $('.slide').eq(num).fadeIn('fast');
        }
        
    };
    
    
    
    
    ///
});