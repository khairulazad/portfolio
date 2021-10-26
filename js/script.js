$("#toggleicon").click(function(){
    $("#sh_ul").slideToggle();

});

$(document).ready(function(){       
    var screen = 0;
    $(document).scroll(function() { 
        screen = $(this).scrollTop();
        if(screen > 70) {
            $("nav").css('background-color', 'brown');
        } else {
            $("nav").css('background-color', 'transparent');
        }
    });
  });