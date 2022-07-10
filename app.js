$(".num").on("click", function() {
    var clicked = $(this);
    clicked.toggleClass("pressed");

        $(".btn").on("click", function() {
            $(".container").addClass("center");
            $("img").attr("src", "illustration-thank-you.png").removeClass("star-icon").addClass("thanks-icon");
            $("h3").text("Thank you!");
            $(".desc").text("I really do appreciate that!");
            $(".num-container").remove();
            $(".mes").append(`<div class="message"><p class="message-p">You selected ${clicked.text()} out of 5</p></div>`);
            $("button").remove();
        });
});

