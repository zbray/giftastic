$(document).ready(function(){

//Variables 
var characters = ["general organa", "star wars rey", "star wars finn", "han solo", "luke skywalker", "lando calrissian"]

// function 

//On button click
$("#userQuery").on("click", function(event){
  event.preventDefault();
  var charName = $("#userQuery").val().trim();

})

})