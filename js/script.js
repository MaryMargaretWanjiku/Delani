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


    $("#submit").click(function(event){
        var name=$("#name").val();
     
         alert( " Hello "  +   name   +  " We have received your message.Thank you for reaching out to us")
         event.preventDefault();
        })

    
    $("#pic1, #project2").hover(function(){
        $("#pic1").fadeIn("slow");
        $("#project2").mouseout(function(){
        $("#pic1").fadeOut("slow");
            }); 
            });

 
   









        
    })
    
    
 
 


