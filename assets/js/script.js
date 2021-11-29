
var saveButton = document.querySelector(".saveBtn");

//save button function to array?
function save (){

  var text1 = document.querySelector("#text1");
  var text2 = document.querySelector("#text2");
  var text3 = document.querySelector("#text3");
  var text4 = document.querySelector("#text4");
  var text5 = document.querySelector("#text5");
  var text6 = document.querySelector("#text6");
  var text7 = document.querySelector("#text7");
  var text8 = document.querySelector("#text8");
  var text9 = document.querySelector("#text9");

  //save to local storage
  var text = {
    "text1": text1.value,
    "text2": text2.value,
    "text3": text3.value,
    "text4": text4.value,
    "text5": text5.value,
    "text6": text6.value,
    "text7": text7.value,
    "text8": text8.value,
    "text9": text9.value,
  };

  // set new submission to local storage 
  localStorage.setItem("text", JSON.stringify(text));

  
}

//recall local storage and append to textarea
function append (){

  var textAppend1 = document.querySelector("#text1");
  var textAppend2 = document.querySelector("#text2");
  var textAppend3 = document.querySelector("#text3");
  var textAppend4 = document.querySelector("#text4");
  var textAppend5 = document.querySelector("#text5");
  var textAppend6 = document.querySelector("#text6");
  var textAppend7 = document.querySelector("#text7");
  var textAppend8 = document.querySelector("#text8");
  var textAppend9 = document.querySelector("#text9");

  var textStorage = localStorage.getItem("text");

  var textAppend = JSON.parse(textStorage);
  // console.log(textAppend.text1);

  textAppend1.textContent = textAppend.text1;
  textAppend2.textContent = textAppend.text2;
  textAppend3.textContent = textAppend.text3;
  textAppend4.textContent = textAppend.text4;
  textAppend5.textContent = textAppend.text5;
  textAppend6.textContent = textAppend.text6;
  textAppend7.textContent = textAppend.text7;
  textAppend8.textContent = textAppend.text8;
  textAppend9.textContent = textAppend.text9;

  saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    save ();
  });

}

function initialPage () {
  if (localStorage.getItem("text") === null) {
    saveButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      save ();
      
    });
  } else {
    append ();
  }
}

initialPage ();
// //for loop to append to textarea w/ ids of text1 - text9

//check time function

//change color function

