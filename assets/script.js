//GLOBAL VARIABLES
//============================================================================================================================================================    
//array for the hours of the work day
var hoursOfDay = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//element for the date display
var dateJumbo = $("<p>");


//element for the save buttons
var save = $("<button>");

var hourlyNotes = {}

//FUNCTIONS
//============================================================================================================================================================
$(document).ready(function() {
    
    //function to display the current date in the jumbotron
    var displayDate = function(){
        dateJumbo.text(moment().format('MMMM DD, YYYY'));
        $("#currentDay").append(dateJumbo);
    }
    
    //function to render the calendar on the page=======================================>WORKING!
    var renderCal = function(){
    for (var i = 0; i < hoursOfDay.length; i++){
       var currentHour = hoursOfDay[i];
       var timeBlock = $("<div>").attr("class", "row");
       $(".container").append(timeBlock);
       var hour = $("<div>").attr("class", ".col-lg-1");
       var notes = $("<textarea>").attr("class", "col-lg-10 description");
       var save = $("<button>").attr("class", "col-lg-1 saveBtn");

       timeBlock.append(hour, notes, save);
       console.log("row: "+hoursOfDay[i])
    }        
    }
    
    
    renderCal();
    
    // EVENT LISTENERS
    //============================================================================================================================================================
    
    
    
    
    //PAGE CONTENT
    //============================================================================================================================================================
    displayDate();
    
    
    
    
    
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


//experimental land
//======================================================================================================================================================
/*
//function to append a time-block row-need 1 for each hour of the work day
var appendRow = function(){
    var timeBlock = $("<div>");
    timeBlock.attr("class", "row time-block");
    $(".container").append(timeBlock);
}

//function to append a column for the hour of the day
var appendColHour = function() {
    var hour = $("<div>");
    hour.attr("class", "col-lg-2 hour");
    $(".time-block").append(hour);
}

//function to append a column for the note entry section
var appendColNote = function(){
    var notes = $("<textarea>");
    notes.attr("class", "col-lg-8 description");
    $(".time-block").append(notes);
}

//function to append a column for the save button
var appendColSave = function(){
    var save = $("<button>");
    save.attr("class", "col-lg-2 saveBtn");
    save.text("save");
    $(".time-block").append(save);
}




this code works to make the columns and rows, but cannot figure out a way to add the times and assign IDs to buttons
//function to append a time-block row-need 1 for each hour of the work day
var appendRow = function(){
    //row
    var timeBlock = $("<div>");
    timeBlock.attr("class", "row time-block");
    $(".container").append(timeBlock);
    
    appendCols();
}



//function to append 3 columns (hour,notes,save) to each row
var appendCols = function(){
    //hour column
    hour.attr("class", "col-lg-1 hour");
    $(".row").append(hour);
    //notes column
    notes.attr("class", "col-lg-10");
    $(".row").append(notes);
    //save column
    save.attr("class", "col-lg-1 saveBtn");
    save.text("save");
    $(".row").append(save);
}

//function to create the calendar and display on page
var renderCal = function(){
    for (var i = 0; i < hoursOfDay.length; i++){
        appendRow();
    }
}
renderCal();








*/