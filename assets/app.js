$(document).ready(function(){

//Per instructions, a themed array of gif search
var characters = ["general organa", "star wars rey", "star wars finn", "han solo", "luke skywalker", "lando calrissian"]

// Function for Displaying User-Generated Character Names
function displayGifs(){
  var char = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=N5OKJJ5Kx7gKlaYEZha1x3zZvZli3Wwd&tag=" + char;

  
}

// Function for Displaying Gifs

//On button click
$("#userQuery").on("click", function(event){
  event.preventDefault();
  var charName = $("#userQuery").val().trim();
  characters.push(charName);
  renderGifs();

});

//Calling the displayGifs function everytime an element with the charGif id is clicked.
$(document).on("click", ".charGif", displayGifs);



})