$(document).ready(function() {


    //GLOBAL VARIABLES
//============================================================================================================================================================



//FUNCTIONS
//============================================================================================================================================================
    //function to display the current date/time in the jumbotron
    var displayDate = function(){
        //display the current date and time in the Jumbotron
    }



// EVENT LISTENERS
//============================================================================================================================================================

//PAGE CONTENT
//============================================================================================================================================================
//display today's date in the jumbotron
var dateJumbo = $("<p>");
dateJumbo.text(moment().format('MMMM DD, YYYY'));
$("#currentDay").append(dateJumbo);




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


*/

//end of document.ready
})