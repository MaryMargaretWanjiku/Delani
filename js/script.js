$(document).ready(function () {
    $("#product-img,.product-d").click(function () {
        $(".product-description").fadeToggle();
        $(".product").fadeToggle();

    });

    $("#design-img,.design-p").click(function () {
        $(".design-description").fadeToggle();
        $(".design").fadeToggle();
    });
    $("#dev-img,.dev").click(function () {
        $(".develop-description").fadeToggle();
        $(".develop").fadeToggle();
    });


    $("#submit").click(function (event) {
        var name = $("#name").val();
        var email= $("#email").val();
        var message=$("#message").val();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in the required data');

        } else {

        

        alert(" Hello " + name + " We have received your message.Thank you for reaching out to us")
        event.preventDefault();
        };




    

    $("#blank, #project1").hover(function () {
        $("#blank").fadeIn("slow");
        $("#project1").mouseout(function () {
            $("#blank").fadeOut("slow");
        });
    });

    $("#pic1, #project2").hover(function(){
        $("#pic1").fadeIn("slow");
        $("#project2").mouseout(function(){
        $("#pic1").fadeOut("slow");
        }); 
    });

    $("#pic2, #project3").hover(function () {
        $("#pic2").fadeIn("slow");
        $("#project3").mouseout(function () {
            $("#pic2").fadeOut("slow");
        });
    });


    $("#pic3, #project4").hover(function () {
        $("#pic3").fadeIn("slow");
        $("#project4").mouseout(function () {
            $("#pic3").fadeOut("slow");
        });
    });


    $("#pic4, #project5").hover(function () {
        $("#pic4").fadeIn("slow");
        $("#project5").mouseout(function () {
            $("#pic4").fadeOut("slow");
        });
    });

    $("#pic5, #project6").hover(function () {
        $("#pic5").fadeIn("slow");
        $("#project6").mouseout(function () {
            $("#pic5").fadeOut("slow");
        });
    });

    $("#pic6, #project7").hover(function () {
        $("#pic6").fadeIn("slow");
        $("#project7").mouseout(function () {
            $("#pic6").fadeOut("slow");
        });
    });

    $("#pic7, #project8").hover(function(){
        $("#pic7").fadeIn("slow");
        $("#project8").mouseout(function(){
        $("#pic7").fadeOut("slow");
            }); 
            });

        













})

})