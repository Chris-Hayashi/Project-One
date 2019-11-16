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
API Design and Details
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


## User Story Breakdown

## Task Breakdowns

## UI Design

## How We Implemented Bootstrap

## Mobile Responsiveness

## API Design and Details


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

