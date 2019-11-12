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
  var omdbApiKey = "trilogy";

  var omdbQueryURL = "http://www.omdbapi.com/?t=";

  $.ajax({
    url: omdbQueryURL + omdbApiKey,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
  //END API

  //MovieDatabase API

  mdApiKey = "fa775e9fe9e1075f6a2bc9dbdb7d79b7";

  var mdQueryURL = "https://api.themoviedb.org/3/trending/all/week?api_key=";

  $.ajax({
    url:mdQueryURL + mdApiKey,
    method: "GET"
  }).then(function(outerResponse) {
      for (var i = 0; i < 5; i++) {

          $.ajax({
            url: omdbQueryURL + outerResponse.results[i].title + "&apikey=" + omdbApiKey,
            method: "GET"
          }).then(function(innerResponse) {
            var poster = $("<img>");
            poster.attr("src", innerResponse.Poster);
            $("#trending-movies").append(poster);
          });
      }
    // $("#movie").attr("src", response.results[1].poster_path);
    console.log(response);
  });