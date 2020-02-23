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


    $("#submit").click(function(){
        var name=$("#name").val();
     
         alert( " Hello "  +   name   +  " We have received your message.Thank you for reaching out to us")
        })

    
    $("#project1").hover(function(){
        $(this)

        
    })
    
    
 
 



    

});