 $(document).ready(function () {

    if (matchMedia("screen and (min-width: 950px)").matches) {
    // 950px 이상에서 사용할 스크립트
        $(".menuLi").hover(function () {
            $(".sub_menu").fadeToggle(100);
        });

    } else {
    // 950px 미만에서 사용할 스크립트
        $('#nav-icon4').click(function(){
            $(this).toggleClass('open');
            $(".sub_menu").fadeToggle(100);
        });
            
     }


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
