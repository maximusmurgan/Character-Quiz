$(".englishButton").click(function(){
    var ageInput = $(".age").val();
     if(ageInput >18)   {
    // display this text if the answer is correct
    $(".ageMessage").text("you are spongebob");
    }
    else{
    // display this text if the answer is incorrect
    $(".englishMessage").text("Wrong! Try again."); 
    }
});
