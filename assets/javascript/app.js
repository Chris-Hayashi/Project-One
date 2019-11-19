// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCub0rY9jJfPV7_M0hR8HDby2zg34od4oE",
  authDomain: "spectator-b36b8.firebaseapp.com",
  databaseURL: "https://spectator-b36b8.firebaseio.com",
  projectId: "spectator-b36b8",
  storageBucket: "spectator-b36b8.appspot.com",
  messagingSenderId: "452594229506",
  appId: "1:452594229506:web:a1d9ed18a9eaf03208621b",
  measurementId: "G-3ZRD15YJRY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//counter for child_added function
var counter = 0;

//child_added event for firebase (runs as soon as page is loaded)
database.ref().on("child_added", function (childSnapshot) {

  //increment the counter
  counter++;
  
  //append the movie title
  $("#movieTitle" + counter).text(childSnapshot.val().title)

  //append the movie image to each corresponding #moviePoster
  $("#moviePoster" + counter).attr("src", childSnapshot.val().posterUrl)
    .attr("data-content", childSnapshot.val().description);

  //append the user comment to each 
  $("#movieComment" + counter).text(childSnapshot.val().userComment);

  //append the emoji
  $("#showEmoji" + counter).html(childSnapshot.val().emoji);

  //reset counter if equal to 4
  if (counter == 4)
  counter = 0;
});


//OMDB API

var omdbApiKey = "&apikey=" + "trilogy";
var omdbQueryURL = "https://www.omdbapi.com/?t=";


//MovieDatabase API (for trending movies)
var mdApiKey = "fa775e9fe9e1075f6a2bc9dbdb7d79b7";
var mdQueryURL = "https://api.themoviedb.org/3/trending/all/week?api_key=";

//MovieDatabase AJAX CALL
$.ajax({
  url: mdQueryURL + mdApiKey,
  method: "GET"
}).then(function (outerResponse) {
  console.log("ajax");
  console.log(outerResponse);

  //append 4 movie images to the trending movies carousel
  for (var i = 0; i < 4; i++) {
    console.log("for loop runs: " + i);


    //retrieve the movie year for each trending movie
    var movieYear = outerResponse.results[i + 1].release_date;
    movieYear = movieYear.split("-");
    movieYear = "&y=" + movieYear[0];

    //inner AJAX call to OMDB API
    omdbCall(i, movieYear);
  }
  function omdbCall(i, movieYear) { 
    $.ajax({
      url: omdbQueryURL + outerResponse.results[i + 1].title + movieYear + omdbApiKey,
      method: "GET"
  }).then(function (innerResponse) {
    console.log(innerResponse);
    console.log("inner ajax called on iteration number: " + i);

    $("#car" + (i + 1)).attr("src", innerResponse.Poster);

  });
  }
});



//onClick event for the search button
$("#button-addon2").on("click", function (event) {

  //prevent the event from refreshing the page
  event.preventDefault();

  //store the movie title in a variable
  var movieTitle = $(".form-control").val().trim();

  //OMDB AJAX CALL
  $.ajax({
    url: omdbQueryURL + movieTitle + omdbApiKey,
    method: "GET"
  }).then(function (response) {

    //retrieve the title of the movie
    $("#movieTitle").text(response.Title);

    //retrieve the image of the movie
    $("#movieImage").attr("src", response.Poster);

    $("#movieImage").attr("data-content", response.Plot);

  });
});


//onClick event for the "Add to Bucket" button
$("#addBucket").on("click", function (event) {

  //prevent the button from refreshing the page
  event.preventDefault();

  //create an object for each movie
  var addMovie = {
    title: $("#movieTitle").text(),
    posterUrl: $("#movieImage").attr("src"),
    userComment: $("#inputField").val(),
    emoji: $("#showEmoji").html(),
    description: $("#movieImage").attr("data-content")
  }

  //upload the movie object to firebase
  database.ref().push(addMovie);
});

//hover over to see description in the userBucket
$(function()    {

  $('[data-toggle="popover"').popover();
});

// here starts EMOJI API logic
emojiID = ["cNEkiz27tOidqUBuoR", "2fIbmaiOnI3VlQFZEq", "yN4RUYrRRrKVRoGqQm", "TgGWZwWlsODxFPA21A", "3OsFzorSZSUZcvo6UC"];
function emojiDisplay() {
  $("#emojiBtn").empty();
  for (i = 0; i < emojiID.length; i++) {
    emojiqueryURL = "https://api.giphy.com/v1/gifs/"+emojiID[i]+"?api_key=tuHOptJN3WWLtwMil1BWJF8fU18JA1f5";
    $.ajax({
      url: emojiqueryURL,
      method: "GET"
    }).then(function (response) {
     // adding div class with a card-group using bootstrap 
      var emojiDiv = $("<span>");
      $("#emojiBtn").append(emojiDiv);          
          var emojiImage = $("<img onclick=imgClick('" + response.data.images.downsized_medium.url + "')>")
              .attr("class", 'emoji_images')
              .attr("src", response.data.images.downsized_medium.url)
              
          $(emojiDiv).append(emojiImage);
    });
  } 
}
function imgClick(idx) {
  $("#showEmoji").html("");
  $("#showEmoji").append('<img src = "' + idx + '" height = 50px width = 50px>');
}
