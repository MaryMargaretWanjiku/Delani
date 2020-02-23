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

        alert(" Hello " + name + " We have received your message.Thank you for reaching out to us")
        event.preventDefault();
    })


    

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













})






