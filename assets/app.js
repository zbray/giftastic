$(document).ready(function(){

//Global Variables
var characters = ["Harry Potter", "Hermione Granger", "Ron Weasley "]

// Function for Displaying Gifs
function displayGifs(){
  var char = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + char + "&api_key=N5OKJJ5Kx7gKlaYEZha1x3zZvZli3Wwd&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){

    for (var i = 0; i < 10; i++) {
      var charDiv = $("<div class='character'>");
      debugger;
      //Creates gifs from image url and attaches attributes needed for app and alt text for fun
      var image = $("<img>");
      image.attr("src", response.data[i].images.original_still.url);
      image.attr("alt", "HAPPEE BIRTHDAE HARRY");
      charDiv.append(image);

      //Saves gif rating to a variable and places it above actual gif
      var rating = response.data[i].rating;
      var p = $("<p>").text("Rating: " + rating);
      charDiv.prepend(p);
      $("#gifsview").prepend(image);
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
    c.text(characters[j]);
    $("#buttonsView").append(c);
  }
}


//Function to change the state of gifs, faking play/pause
function changeState(){
  
}

//EventListener for submit button to push user entry into charButtons array
$("#addChar").on("click", function(event){
  event.preventDefault();
  var gif = $("#charInput").val().trim();
  characters.push(gif);
  renderButtons();
  return false;

})

$(document).on("click", ".charButton", displayGifs);

//Calling the function to render the buttons when page loads
renderButtons();
//EventListener for clicks on gifs to call the changeState function


})