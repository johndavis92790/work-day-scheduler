//global variables
var saveButton = document.querySelector(".saveBtn");
var text9 = document.querySelector("#text9");
var text10 = document.querySelector("#text10");
var text11 = document.querySelector("#text11");
var text12 = document.querySelector("#text12");
var text13 = document.querySelector("#text13");
var text14 = document.querySelector("#text14");
var text15 = document.querySelector("#text15");
var text16 = document.querySelector("#text16");
var text17 = document.querySelector("#text17");

function initialPage () {
  //runs checkTime first to display the current day in the jumbotron and append background colors in the textareas
  checkTime ();
  //if the local storage is empty then it listens for a save button click to save the initial data
  if (localStorage.getItem("text") === null) {
    saveButton.addEventListener("click", function(event) {
      event.preventDefault();
      save ();
    });
    //if the local storage has data already in it, then it runs the append function
  } else {
    append ();
  }
}

function save (){
  //gets text content from each textarea
  var text = {
    "text9": text9.value,
    "text10": text10.value,
    "text11": text11.value,
    "text12": text12.value,
    "text13": text13.value,
    "text14": text14.value,
    "text15": text15.value,
    "text16": text16.value,
    "text17": text17.value,
  };
  // set new submission to local storage as a string object array
  localStorage.setItem("text", JSON.stringify(text));
}

function append (){
//recall local storage and append to textareas
  var textStorage = localStorage.getItem("text");
  var textAppend = JSON.parse(textStorage);

  //saves any updated text in the textareas
  text9.textContent = textAppend.text9;
  text10.textContent = textAppend.text10;
  text11.textContent = textAppend.text11;
  text12.textContent = textAppend.text12;
  text13.textContent = textAppend.text13;
  text14.textContent = textAppend.text14;
  text15.textContent = textAppend.text15;
  text16.textContent = textAppend.text16;
  text17.textContent = textAppend.text17;

  //it still listens for a save button click to save the any updated data
  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    save ();
  });
}

function checkTime (){
  //gets current date and appends it to jumbrotron
  var currentDateP = document.querySelector("#currentDay");
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  currentDateP.append(currentDate);
  //gets current hour and resets if to the beginning of the hour
  var currentHour = dayjs().startOf('hour');
  currentHour = dayjs(currentHour).format('MMMM D YYYY, h:mm A');
  //get current hour and resets it to the last minute of the hour to create a range
  var currentHourPlus = dayjs().endOf('hour');
  currentHourPlus = dayjs(currentHourPlus).format('MMMM D YYYY, h:mm A');

  // for loop to set the background color of each textarea
  for (var i = 9; i < 18; i++) {
    // set the current time block as the beginning of the hour and adds 1 millisecond to make sure that it 
    // doesn't line up exactly with the beginnging minute of the range that was created earlier
    var hour = dayjs().hour(i).minute(0).second(0).millisecond(1);
    var hourFormatted = dayjs(hour);
    hourFormatted = hourFormatted.format('MMMM D YYYY, h:mm A');
    // if the hour slot in question is within (current) that range created before
    if(
        (dayjs(hourFormatted).isAfter(currentHour)) &&
        (dayjs(hourFormatted).isBefore(currentHourPlus))
      ){
      // it sets the background color as red
      var textColor = document.querySelector('#text' + i);
      textColor.setAttribute("class", "h-100 w-100 d-inline-block border-2 border-white bg-danger");
    // if the hour slot in question is before (past) that range created before
    } else if (dayjs(hourFormatted).isBefore(currentHour)){
      // it sets the background color as grey
      var textColor = document.querySelector('#text' + i);
      textColor.setAttribute("class", "h-100 w-100 d-inline-block border-2 border-white bg-secondary");
    // if the hour slot in question is after (future) that range created before
    } else {
      // it sets the background color as green
      var textColor = document.querySelector('#text' + i);
      textColor.setAttribute("class", "h-100 w-100 d-inline-block border-2 border-white bg-success");
    }
  }
}

// main function
initialPage ();