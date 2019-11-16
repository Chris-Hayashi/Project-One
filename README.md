# Project-Spectator
Idea behind this app was based on how we currently depend on redundant and elaborate information we find on the internet. We don’t truly understand IF we could watch a particular movie (or) TV Show.
We depend on websites that write a 2 page long reviews which we don’t really need, we just simply want to know if its worth our time or not. We don’t get this information anywhere….. UNTIL NOW!
Our website is a social platform for a particular  user to come in search for a movie/tv show, based on the choose how they feel about the movie using one of the emoticons we provide as options and write a small blurb of info about what they really feel in a quick sentence. 
If they really like the movie or tv show which they want to create a bucket and share this with their friends and family, THEY CAN do that. This is our differentiator and this is why users will be attracted to use the website for sharing their opinions with their friends and family.

## Table of contents
Technologies Used
Applications Used
Wireframe Design
User Story Breakdown
Task Breakdowns
UI Design
How We Implemented Bootstrap
Mobile Responsiveness
API Design, Firebase and Details
Screenshots of Project-1 progress
Git Flow
DEMO Gif Walkthrough
Future RoadMap
Team memeber GIT Links
Code Snippets


## Technologies Used
HTML
Javascript/jQuery
FireBase
APIs (OMDB, The MovieDB, GIPHY, Shreaholic)
Javascript Libraries (Popper.js)
Markdown
Bootstrap
AJAX
JSON

## Applications Used
GitHub
ChromeDev tools
Visual Studio Code
Chrome browser
MockFlow

## Wireframe Design

![WireFrame Design](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/wireframe.png "WireFrame Design")

## User Story Breakdown
User Story 1: Create a website with necessary hooks for building the backend functionality

User Story 2: Add Bootstrap design for the website to improve the UI functionality 

User Story 3: Add OMDI API functionality

User Story 4: Add Trending API functionality

User Story 5: Add Emoji API functionality

User Story 6: Add Shareaholic API functionality

User Story 7: Add popper.JS libraries to the application

User Story 8: Additional hooks for the UI for popper.js


## Task Breakdowns
1. Design - A sleek looking UI using bootstrap and  the website being fully mobile responsive - Matt & Brandon
2. Functionality - Using OMDB APIs make a call and display the results in the cards - Chris H
3. Functionality - Using Movie Database APIs display the trending movies in a carousel - Matt & Chris H
4. Functionality - Adding emojis using GIPHY API to the cards and bucket sections - Krishna
5. Functionality - Adding Share feature to the bucket section - Krishna
6. GIT branching - Krishna

## UI Design
The layout was intended to give the user a relaxing, easy on the eyes, UI experience, which is reflected in our chosen color scheme. 
“Don’t over complicated it”
The feel should remind you of being in a dark movie theatre, or cozied up on the couch with the lights off enjoying your favorite show with some popcorn. 

![UI Design Progression](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/codeProgression1.png "UI Design Layout 1")

![Code progression Final](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/codeProgression2.png "UI Design Layout 2")

## How We Implemented Bootstrap
Jumbotron for header,
Carousel for trending media
Most importantly...cards,  cards, and more cards!

![Bootstrap Progression 1](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/jumbotron.png "Jumbotron Design")

![Bootstrap Progression 2](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/bootstrapSnippet.png "Bootstrap Code Snippet")


## Mobile Responsiveness
We used three breakpoints: 
Once the page hits 640px, we decided to hide away the trending carousel. We did this to help guide the user through the flow. Instead of seeing the trending carousel  between the preview card and bucket, they just see preview card -> bucket. We don’t want to distract the user or have them leave the application to look up a trending movie on mobile.

![Mobile Responsiveness](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/mobileResponseExample.gif "Mobile Responsiveness")


## API Design and Details

### The OMDB API
We used the OMDB API for searching for movies/tv shows from the database
Upon search we wanted to use the response from API and append them to a HTML DIV

![The OMDB API](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/json1.png "The OMDB API")


### The MovieDB API
We use this API to get the latest trending movies & tv shows. This will showcase as a carousel with the trending movies & tv shows. The screenshot represents what would the JSON response would be when we query the API.

![The MovieDB API](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/json2.png "The MovieDB API")

### Firebase Configuration
Once user clicks the “add to bucket” button after filling out their media info, the child snapshot info is sent up to Firebase.

![The Firebase Config](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/firebase.png "The Firebase Config")

### Giphy API (Emojis)
We searched for multiple options for grabbing a set of emojis to rate or emote about a film. We landed with Giphy APIs and we searched for the IDs we wanted to show case for our V1 of the application. We used that to append to the movie search. Every search we tag, we were able to append the emoticon to the movie we wanted to rate.

![The Giphy API](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/firebase.png "The Giphy API")

### Shareaholic API
We used this API to share our website/application over a social media platform. For this we used the shareaholic API which gave us the necessary start for sharing our application.

![The Shareaholic API](https://github.com/Chris-Hayashi/Project-One/blob/master/assets/images/firebase.png "The Giphy API")



## Screenshots of Project-1 progress

![Code progression Final](https://github.com/krishnaaddala/train-schedulerHW/blob/master/assets/images/Code_Final1.png "TrainScheduler Final Layout 1")

![Code progression Final](https://github.com/krishnaaddala/train-schedulerHW/blob/master/assets/images/code_final2.png "TrainScheduler Final Layout 2")

## Git Flow


## DEMO Gif Walkthrough

![](https://github.com/krishnaaddala/train-schedulerHW/blob/master/assets/images/trainScheduler.gif)

## Future RoadMap

## Team memeber GIT Links

## 


## Code Snippets

```var firebaseConfig = {
    apiKey: "AIzaSyAY6AYGDx-D7WF3a0W5fcs_aK91uCPfp6c",
    authDomain: "train-scheduler-assignme-3cc0b.firebaseapp.com",
    databaseURL: "https://train-scheduler-assignme-3cc0b.firebaseio.com",
    projectId: "train-scheduler-assignme-3cc0b",
    storageBucket: "train-scheduler-assignme-3cc0b.appspot.com",
    messagingSenderId: "474090265715",
    appId: "1:474090265715:web:d2823fa7bb9f7605491e06",
    measurementId: "G-1R09HW8CW6"
};
  ```

  ```function clearTrainOnAdd() {
    $("#trainName").val("");
    $("#trainDestination").val("");
    $("#firstTrainTime").val("");
    $("#trainFrequency").val("");
}
  ```

  ``` // adding an object to hold train data to store
    var newTrain = {
        name: trainName,
        destination: trainDestination,
        firstTrain: firstTrainTime,
        frequency: trainFrequency
    };
});
  ```
  ```var now = moment();
    var today = now.format('YYYY-MM-DD');
    var nowTS = today + " " + firstTrainTime + ':00'
    var nowTSDate = moment(nowTS).subtract(1, 'day')
    var duration = Math.floor(moment.duration(moment().diff(nowTSDate)).asMinutes());
    var offset = Math.floor(duration % trainFrequency)
    var timeToNextTrain = trainFrequency - offset;
    var nextTrainArrival = moment().add(timeToNextTrain, 'minute').format("HH:mm");
  ```
Git commands:

```git status
    git add .
    git commit -m "message"
    git push origin master
    ```

