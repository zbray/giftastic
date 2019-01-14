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

    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div class ='character'>");

      var rating = results[i].rating;

      var p = $("<p>").text("Rating: " + rating);

      var gifImage = $("<img>");
      gifImage.attr("src", results[i].images.fixed_height.url);

      gifDiv.prepend(p);
      gifDiv.prepend(gifImage);

      $("#gifsview").prepend(gifDiv);
    }

    gifImage.attr("src", imageUrl);
    gifImage.attr("alt", "punch it, chewey");

    $("#gifsview").prepent(gifDvi);
    
  })
}

// Function for Displaying Buttons


//On button click


//Calling the displayGifs function everytime an element with the charGif id is clicked.




})