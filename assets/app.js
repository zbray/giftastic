$(document).ready(function(){

//Global Variables
var characters = ["Harry Potter", "Hermione Granger", "Ron Weasley"]

// Function for Displaying Gifs
function displayGifs(){
  var char = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?&api_key=N5OKJJ5Kx7gKlaYEZha1x3zZvZli3Wwd&q=" + char;

  //AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);
    var results = response.data;
    for (var i = 0; i < 10; i++) {
      var charDiv = $("<div class='character'>");
      //Creates gifs from image url and attaches attributes needed for app and alt text for fun
      var image = $("<img class='ani'>");
      image.attr("src", results[i].images.original_still.url);
      image.attr("alt", "HAPPEE BIRTHDAE HARRY");
      image.attr("dataStill", results[i].images.original_still.url);
      image.attr("dataAnimate", results[i].images.original.url);
      image.attr("dataState", "still");


      //Saves the title and rating of each gif and stores them in a new p tag
      var rating = response.data[i].rating;
      var p = $("<p>").text("Rating: " + rating);
      var title = response.data[i].title;
      var t = $("<p>").text("Title: " + title);
    
      //Create a download button for each gif

      //Appends the gif's image, title and rating onto the div on the page
      charDiv.append(image);
      charDiv.append(t);
      charDiv.append(p);
      $("#gifsView").prepend(charDiv);
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
  var state = $(this).attr("dataState");
  if (state === "still"){
    $(this).attr("src", $(this).attr("dataAnimate"));
    $(this).attr("dataState", "animate");
  }else if (state === "animate") {
    $(this).attr("src", $(this).attr("dataStill"));
    $(this).attr("dataState", "still");
  }
}

//EventListener for submit button to push user entry into charButtons array
$("#addChar").on("click", function(event){
  event.preventDefault();
  var gif = $("#charInput").val().trim();
  characters.push(gif);
  renderButtons();
  return false;
})

//Calling the function to render the buttons when page loads
renderButtons();

//EventListener on buttons that create buttons for the selected character
$(document).on("click", ".charButton", displayGifs);

//EventListener for clicks on gifs to call the changeState function
$(document).on("click", ".ani", changeState);
})