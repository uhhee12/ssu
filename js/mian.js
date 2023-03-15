$(document).ready(function () {    

     $(".menuLi").hover(function () {
            $(".sub_menu").fadeToggle(100);
     });
    
    $('#nav-icon4').click(function(){
            $(this).toggleClass('open');
            $(".sub_menu").fadeToggle(100);
    });
    


    
     $("#nav-icon1").hover(function () {
        $(".content_menu").slideToggle();
     });
     

    // $("#nav-icon1").click(function () {
    //     $(".content_menu").stop().slideToggle();
    //     $('#nav-icon1').toggleClass('open')
    //     return false; 
        
    // });
    // $(document).click(function (e) {
    //     if (e.target.className == "content_menu") {
    //         return false
    //     }
    //     $(".content_menu").stop().slideUp(0);
    //     $('#nav-icon1').removeClass('open')
    // });
    

    //     window.onresize = function(){
    //     document.location.reload();
    //  };
    
});


