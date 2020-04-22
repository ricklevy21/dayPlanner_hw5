$(document).ready(function() {


    //GLOBAL VARIABLES
//============================================================================================================================================================
//array for the hours of the work day
var hoursOfDay = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


//FUNCTIONS
//============================================================================================================================================================
    //function to display the current date/time in the jumbotron
    var displayDate = function(){
        //display the current date and time in the Jumbotron
    }

    //function to create the calendar and display in container
    var renderCal

// EVENT LISTENERS
//============================================================================================================================================================

//PAGE CONTENT
//============================================================================================================================================================
//display today's date in the jumbotron
var dateJumbo = $("<p>");
dateJumbo.text(moment().format('MMMM DD, YYYY'));
$("#currentDay").append(dateJumbo);

//append a time-block row-need 1 for each hour of the work day===============>put into function
var timeBlock = $("<div>");
timeBlock.attr("class", "row time-block");
$(".container").append(timeBlock);

//append a column for the hour fo the day===============>put into function with for loop hoursOfDay array
var hour = $("<div>");
hour.attr("class", "col-lg-2 hour");
$(".time-block").append(hour);

//append a column for the note entry section
var notes = $("<textarea>");
notes.attr("class", "col-lg-8 description");
$(".time-block").append(notes);

//append a column for the save button
var save = $("<button>");
save.attr("class", "col-lg-2 saveBtn");
$(".time-block").append(save);





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


function that appends a new time-block row for every hour of the work day

*/

//end of document.ready
})