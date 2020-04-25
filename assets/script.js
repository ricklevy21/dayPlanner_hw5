//GLOBAL VARIABLES
//============================================================================================================================================================    
//array for the hours of the work day and associated information
var hoursOfDay = [
    {
        display: "9 AM",
        military: "9",
        time: moment("9:00am", "h:mma"),
        name: "nine"
    },
    {
        display: "10 AM",
        military: "10",
        time: moment("10:00am", "h:mma"),
        name: "ten"
    },
    {
        display: "11 AM",
        military: "11",
        time: moment("11:00am", "h:mma"),
        name: "eleven"
    },
    {
        display: "12 PM",
        military: "12",
        time: moment("12:00pm", "h:mma"),
        name: "twelve"
    },
    {
        display: "1 PM",
        military: "13",
        time: moment("1:00pm", "h:mma"),
        name: "one"
    },
    {
        display: "2 PM",
        military: "14",
        time: moment("2:00pm", "h:mma"),
        name: "two"
    },
    {
        display: "3 PM",
        military: "15",
        time: moment("3:00pm", "h:mma"),
        name: "three"
    },
    {
        display: "4 PM",
        military: "16",
        time: moment("4:00pm", "h:mma"),
        name: "four"
    },
    {
        display: "5 PM",
        military: "17",
        time: moment("5:00pm", "h:mma"),
        name: "five"
    },
];

//element for the date display
var dateJumbo = $("<p>");


//object to store the user's notes
var hourlyNotes = {}








//FUNCTIONS
//============================================================================================================================================================
$(document).ready(function() {
    
    //function to display the current date in the jumbotron============================>WORKING
    var displayDate = function(){
        dateJumbo.text(moment().format('MMMM DD, YYYY'));
        $("#currentDay").append(dateJumbo);
    }
    
    //function to render the calendar on the page=======================================>WORKING
    var renderCal = function(){
    for (var i = 0; i < hoursOfDay.length; i++){
       var currentHour = hoursOfDay[i];
       var timeBlock = $("<div>").attr("class", "row time-block");
       $(".container").append(timeBlock);
       var hour = $("<div>").attr("class", "col-lg-1 hour ");
       hour.text(currentHour.display);
       var notes = $("<textarea>").attr("class", "col-lg-10 description");
       notes.attr("id", currentHour.name);
       //var saveIcon = ("<i>").attr("class", "fas fa-save")
       var save = $("<button>").attr("class", "col-lg-1 saveBtn");
       save.html("<i class='fas fa-save'></i>")
       save.attr("id", currentHour.name);
       timeBlock.append(hour, notes, save);
       var timeNow = moment().hours();

       //color code textarea based on the current time
       if (parseInt(currentHour.military) === timeNow){
           notes.addClass("present");
       } else if (parseInt(currentHour.military) < timeNow){
           notes.addClass("past")
       } else if (parseInt(currentHour.military) > timeNow){
           notes.addClass("future")
       }
     }
        //fetch locally stored data
        var notesFromLocal = localStorage.getItem("hourlyNotes")
        var notesFromLocalObj = JSON.parse(notesFromLocal);
        //console.log(notesFromLocalObj)

        //add everything from local storage back into the hourlyNotes object
        if (notesFromLocalObj !== null){
        hourlyNotes.nineNote = notesFromLocalObj.nineNote;
        hourlyNotes.tenNote = notesFromLocalObj.tenNote;
        hourlyNotes.elevenNote = notesFromLocalObj.elevenNote;
        hourlyNotes.twelveNote = notesFromLocalObj.twelveNote;
        hourlyNotes.oneNote = notesFromLocalObj.oneNote;
        hourlyNotes.twoNote = notesFromLocalObj.twoNote;
        hourlyNotes.threeNote = notesFromLocalObj.threeNote;
        hourlyNotes.fourNote = notesFromLocalObj.fourNote;
        hourlyNotes.fiveNote = notesFromLocalObj.fiveNote;
        }
        
        if (notesFromLocalObj !== null){
        //add locally stored notes to calendar
        $("textarea#nine").text(notesFromLocalObj.nineNote)
        $("textarea#ten").text(notesFromLocalObj.tenNote)
        $("textarea#eleven").text(notesFromLocalObj.elevenNote)
        $("textarea#twelve").text(notesFromLocalObj.twelveNote)
        $("textarea#one").text(notesFromLocalObj.oneNote)
        $("textarea#two").text(notesFromLocalObj.twoNote)
        $("textarea#three").text(notesFromLocalObj.threeNote)
        $("textarea#four").text(notesFromLocalObj.fourNote)
        $("textarea#five").text(notesFromLocalObj.fiveNote)
        }


        //functions that capture user's input text and adds it to the object hourlyNotes
        var ninenotesToObj = function(){
            var nineInput = $("textarea#nine").val();
            hourlyNotes.nineNote = nineInput;
            console.log(hourlyNotes)
            localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));

        }
        var tennotesToObj = function(){
            var tenInput = $("textarea#ten").val();
            hourlyNotes.tenNote = tenInput;
            console.log(hourlyNotes)
            localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));

        }
        var elevennotesToObj = function(){
            var elevenInput = $("textarea#eleven").val();
            hourlyNotes.elevenNote = elevenInput;
            console.log(hourlyNotes)
            localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));

        }
        var twelvenotesToObj = function(){
            var twelveInput = $("textarea#twelve").val();
            hourlyNotes.twelveNote = twelveInput;
            console.log(hourlyNotes)
            localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));

        }
        var onenotesToObj = function(){
            var oneInput = $("textarea#one").val();
            hourlyNotes.oneNote = oneInput;
            console.log(hourlyNotes)
            localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));

        }
        var twonotesToObj = function(){
            var twoInput = $("textarea#two").val();
            hourlyNotes.twoNote = twoInput;
            console.log(hourlyNotes)
            localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));

        }
        var threenotesToObj = function(){
            var threeInput = $("textarea#three").val();
            hourlyNotes.threeNote = threeInput;
            console.log(hourlyNotes)
            localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));

        }
        var fournotesToObj = function(){
            var fourInput = $("textarea#four").val();
            hourlyNotes.fourNote = fourInput;
            console.log(hourlyNotes)
            localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));

        }
        var fivenotesToObj = function(){
            var fiveInput = $("textarea#five").val();
            hourlyNotes.fiveNote = fiveInput;
            console.log(hourlyNotes)
            localStorage.setItem("hourlyNotes", JSON.stringify(hourlyNotes));

        }
     
     

    //eventListeners
     $("button#nine").on("click", ninenotesToObj);
     $("button#ten").on("click", tennotesToObj);
     $("button#eleven").on("click", elevennotesToObj);
     $("button#twelve").on("click", twelvenotesToObj);
     $("button#one").on("click", onenotesToObj);
     $("button#two").on("click", twonotesToObj);
     $("button#three").on("click", threenotesToObj);
     $("button#four").on("click", fournotesToObj);
     $("button#five").on("click", fivenotesToObj);

    };


    
    
    // EVENT LISTENERS
    //============================================================================================================================================================
    
    
    //PAGE CONTENT
    //============================================================================================================================================================
    displayDate();
    renderCal();

  

    
    
    
    //TO DO
    //============================================================================================================================================================
    /*
    function that saves the user's input to local storage when the save button is clicked
    function that converts array of objects to array of strings before sending to local storage
    function that converts array of strings back to objects when retrieving from storage
    
        
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