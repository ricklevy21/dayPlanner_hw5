$(document).ready(function() {


    //GLOBAL VARIABLES
//============================================================================================================================================================
//array of messages to appear in Jumbotron
var messages = [
    "YOUR ARE LATE!...jk",
    "Cheers to a produtive day",
    "Don't forget to wash your hands",
    "There is always tomorrow",
    "No time like the present",
    "Carpe diem"
]
//variable for random message from messages array
var getMessage = messages[Math.floor(Math.random()*messages.length)];
console.log(getMessage)

//CONTENT VARIABLES
//variable for placing the current time in the Jumbotron
var timeJumbotron = $("<p>");
var randomMessage = $("<p>");


//FUNCTIONS
//============================================================================================================================================================
    //function to display the current date/time in the jumbotron
    var displayTime = function(){
        //display the current date and time in the Jumbotron
        timeJumbotron.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        $("#datetimeJumbo").append(timeJumbotron);
    }

    //function to update the current time in the jumbotron every second
    var updateTime = function(){
        var interval = setInterval(function(){
            displayTime();
        },1000)
    }

    //function to display a message in the jumbotron
    var displayMessage = function(){
        //display a random message in the Jumbotron
        randomMessage.text(getMessage);
        $("#friendlyMessage").append(randomMessage);
    }

    //function to update the random meesage in the jumbotron every 3 minutes
    var updateMessage = function(){
        displayMessage();
        var interval = setInterval(function(){
        displayMessage();
        },5000)
    }



// EVENT LISTENERS
//============================================================================================================================================================

//PAGE CONTENT
//============================================================================================================================================================
updateTime();
updateMessage();




//TO DO
//============================================================================================================================================================
/*

function that color codes each input field based on the time of day. Likely use an if statement
function to set interval to reset above color coding every hour
function to figure out what time it is (and store it in a variable?)


array of objects to store the calendar items in
function that saves the user's input to local storage when the save button is clicked
function that converts array of objects to array of strings before sending to local storage
function that converts array of strings back to objects when retrieving from storage


array of messages to appear in jumbotron.
function to select random message from array and display a new on every hour



*/

//end of document.ready
})