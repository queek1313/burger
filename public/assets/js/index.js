$(document).ready(function () {
    $(".eaten").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax({url: "/api/burgers/" + id, method: "PUT"})
            
        .then(function (data) {
            location.reload();
        });
    });

    $(".newBurger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burgerName").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        })
    })
});
