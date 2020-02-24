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
        var email = $("#email").val();
        var message = $("#message").val();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in the required data');

        } else {



            alert(" Hello " + name + " We have received your message.Thank you for reaching out to us")
            event.preventDefault();
        };


    })



    $("#blank, #project1").hover(function (event) {
        $("#blank").fadeIn("slow");
        $("#project1").mouseout(function () {
            $("#blank").fadeOut("fast");
            event.preventDefault();
        });
    });

    $("#pic1, #project2").hover(function (event) {
        $("#pic1").fadeIn("slow");
        $("#project2").mouseout(function () {
            $("#pic1").fadeOut("slow");
            event.preventDefault();
        });
    });

    $("#pic2, #project3").hover(function (event) {
        $("#pic2").fadeIn("slow");
        $("#project3").mouseout(function () {
            $("#pic2").fadeOut("slow");
            event.preventDefault();
        });
    });


    $("#pic3, #project4").hover(function (event) {
        $("#pic3").fadeIn("slow");
        $("#project4").mouseout(function () {
            $("#pic3").fadeOut("slow");
            event.preventDefault();
        });
    });


    $("#pic4, #project5").hover(function (event) {
        $("#pic4").fadeIn("slow");
        $("#project5").mouseout(function () {
            $("#pic4").fadeOut("slow");
            event.preventDefault();
        });
    });

    $("#pic5, #project6").hover(function (event) {
        $("#pic5").fadeIn("slow");
        $("#project6").mouseout(function () {
            $("#pic5").fadeOut("slow");
            event.preventDefault();
        });
    });

    $("#pic6, #project7").hover(function (event) {
        $("#pic6").fadeIn("slow");
        $("#project7").mouseout(function () {
            $("#pic6").fadeOut("slow");
            event.preventDefault();
        });
    });

    $("#pic7, #project8").hover(function (event) {
        $("#pic7").fadeIn("slow");
        $("#project8").mouseout(function () {
            $("#pic7").fadeOut("slow");
            event.preventDefault();
        });
    });

})