$(document).ready(function(){

//Initial list of
var characters = ["harry potter", "hermione granger", "ron weasley "]


// Function for Displaying Gifs
function displayGifs(){
  var char = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + char + "&limit=10&api_key=N5OKJJ5Kx7gKlaYEZha1x3zZvZli3Wwd";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){

    for (var i = 0; i < 10; i++) {
      var displayGif = $("<div class ='character'>");
      
      //Creates gifs from image url and attaches attributes needed for app and alt text for fun
      var gifImage = $("<img>");
      gifImage.attr("src", response.data[i].images.fixed_height.url);
      gifImage.attr("alt", "HAPPEE BIRTHDAE HARRY");
      gifImage.attr("data-still", response.data[i].images.original_still.url);
      gifImage.attr("data-animate", response.data[i].images.original.url);
      gifImage.attr("data-state", "still");
      displayGif.append(gifImage);

      //Saves gif rating to a variable and places it above actual gif
      var rating = response.data[i].rating;
      var p = $("<p>").text("Rating: " + rating);
      displayGif.prepend(p);

      $("#gifsview").prepend(gifDiv);
    }
    
  })
}

//Function for Rendering Buttons to Webpage
function renderButtons(){

  $("#buttonsView").empty();

  for(var j = 0; j < characters.length; j++){

    var c = $("<button>");
    c.addClass("charButton");
    c.attr("data-name", characters[j]);
    c.text(characters[i]);
    $("#buttons-view").append(c);
  }
}


//Function to change the state of gifs, faking play/pause
function changeState(){
  
}

//EventListener for submit button to push user entry into charButtons array

//Calling the function to render the buttons when page loads

//EventListener for clicks on gifs to call the changeState function


})