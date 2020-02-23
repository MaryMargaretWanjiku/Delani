$(document).ready(function(){
    $("#product-img,.product-d").click(function(){
        $(".product-description").fadeToggle();
        $(".product").fadeToggle();
        
    });

    $("#design-img,.design-p").click(function(){
        $(".design-description").fadeToggle();
        $(".design").fadeToggle();
    });
    $("#dev-img,.dev").click(function(){
        $(".develop-description").fadeToggle();
        $(".develop").fadeToggle();
    });

    $("#blank, #project1").hover(function(){
        $("#blank").slideDown("slow");
        $("#project1").mouseout(function(){
            $("#blank").slideUp("slow");
        });
    });
});