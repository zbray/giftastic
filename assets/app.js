$(document).ready(function(){

//Initial list of
var initChars = ["harry potter", "hermione granger", "ron weasley "]


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
      
      var gifImage = $("<img>");
      gifImage.attr("src", response.data[i].images.fixed_height.url);
      gifImage.attr("alt", "HAPPEE BIRTHDAE HARRY");
      gifImage.attr("data-still", response.data[i].images.original_still.url);
      gifImage.attr("data-animate", response.data[i].images.original.url);
      var rating = response.data[i].rating;
      

      var p = $("<p>").text("Rating: " + rating);

      var gifImage = $("<img>");
      

      displayGif.prepend(p);
      displayGif.prepend(gifImage);

      $("#gifsview").prepend(gifDiv);
    }

    

    $("#gifsview").prepent(displayGif);
    
  })
}

// Function for Displaying Buttons


//On button click


//Calling the displayGifs function everytime an element with the charGif id is clicked.




})