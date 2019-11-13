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


  //OMDB API
  var omdbApiKey = "&apikey=" + "trilogy";

  var omdbQueryURL = "http://www.omdbapi.com/?t=";

  //MovieDatabase API (for trending movies)

  mdApiKey = "fa775e9fe9e1075f6a2bc9dbdb7d79b7";

  var mdQueryURL = "https://api.themoviedb.org/3/trending/all/week?api_key=";

  //MovieDatabase AJAX CALL
  $.ajax({
    url:mdQueryURL + mdApiKey,
    method: "GET"
  }).then(function(outerResponse) {
      for (var i = 1; i < 5; i++) {

          $.ajax({
            url: omdbQueryURL + outerResponse.results[i].title + omdbApiKey,
            method: "GET"
          }).then(function(innerResponse) {
            $("#trending" + i).attr("src", innerResponse.Poster);
          });
      }
    console.log(response);
  });



  // //onClick event for the search button
  // $("#button-addon2").on("click", function(event) {

  //   //prevent the event from refreshing the page
  //   event.preventDefault();

  //   //store the movie title in a variable
  //   var movieTitle = $(".form-control").val().trim();

  //   //OMDB AJAX CALL
  //   $.ajax({
  //     url: omdbQueryURL + movieTitle + omdbApiKey,
  //     method: "GET"
  //   }).then(function(response) {

  //     //retrieve the title of the movie
  //     $("#movieTitle").text(response.Title);

  //     //retrieve the image of the movie
  //     $("#movieImage").attr("src", response.Poster);

  //   });
  // });