
var saveButton = document.querySelector(".saveBtn");
var textTimes = ["9","10","11","12","13","14","15","16","17"];

var text9 = document.querySelector("#text9");
var text10 = document.querySelector("#text10");
var text11 = document.querySelector("#text11");
var text12 = document.querySelector("#text12");
var text13 = document.querySelector("#text13");
var text14 = document.querySelector("#text14");
var text15 = document.querySelector("#text15");
var text16 = document.querySelector("#text16");
var text17 = document.querySelector("#text17");

//save button function to array?
function save (){

  

  //save to local storage
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

  // set new submission to local storage 
  localStorage.setItem("text", JSON.stringify(text));

  
}

//recall local storage and append to textarea
function append (){

  var textStorage = localStorage.getItem("text");

  var textAppend = JSON.parse(textStorage);
  // console.log(textAppend.test9);

  text9.textContent = textAppend.test9;
  text10.textContent = textAppend.text10;
  text11.textContent = textAppend.text11;
  text12.textContent = textAppend.text12;
  text13.textContent = textAppend.text13;
  text14.textContent = textAppend.text14;
  text15.textContent = textAppend.text15;
  text16.textContent = textAppend.text16;
  text17.textContent = textAppend.text17;

  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    save ();
  });

}

function initialPage () {
  checkTime ();
  if (localStorage.getItem("text") === null) {
    
    saveButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      save ();
      
    });
  } else {
    append ();
  }
}

//check time function

function checkTime (){
  var currentDateP = document.querySelector("#currentDay");
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  currentDateP.append(currentDate);
  var currentHour = dayjs().format('MMMM D YYYY, h:mm A');
  // console.log(currentHour);

  
  // for (let i = 9; textTimes < 17; i++) {
    var hour = dayjs().hour(textTimes[0]).minute(0).second(0).millisecond(0);
    
    var hourFormatted = dayjs(hour).format('MMMM D YYYY, h:mm A');
    
    console.log('currentHour', currentHour);
    console.log('hourFormated', hourFormatted);

    if(dayjs(hourFormatted).isBefore(currentHour, 'hour')) {
      console.log('test');
      // test9
    }
    
  // }
}

//change color function

function setColor (){

}

initialPage ();