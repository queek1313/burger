$(document).ready(function(){

$(".add-burger").on("click",function(event){
    event.preventDefault();
    console.log("trigger")

    var newBurger={
       name: $("#burgerName").val().trim()
    };
    $ajax("/api/burgers",{
        type: "POST",
        data:newBurger
    }).then(function(){
        console.log("trigger")
        location.reload();
    })
})














})