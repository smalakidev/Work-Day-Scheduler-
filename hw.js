//Funciton is what creates functionality. Without it,
//the website won't work.
$(document).ready(function(){

//listening for save button clicks. Functuon activates click function.
$(".saveBtn").on("click", function(){
    //We are going up in the DOM with this code here. This allows
    //us to focus in on the saveBtn itself.
    //console.log("CLICKED", $(this).siblings(".input").val());

    var value = $(this).siblings(".input").val();
    //That parent(div class), had two attributues: 
    //a class and an ID. With var time, we are specifically targetting
    //the id attribute(time) of this div.
    var time = $(this).parent().attr("id");

    console.log(time, value);

//This is where the key and value pairs come together and are saved to 
//the local storage. Key is Time. Value is value in this case.
    localStorage.setItem(time, value);

});



function hourUpdate(){
var currentHr = 12;
//check if weve moved past this time
//use .each to go through each row(Look it up)
//Use conditionals to compare

}


var  my_time = new Date();
console.log(my_time);
//Used jQuery to grab that HTML element and then added a text
//to it here.
$('#my_time').text("Current Date and Time,"+ my_time);



//This will help with the times 
function setUpRows(){

    var currentHour = moment().hours();
    console.log(moment().hours());

    $(".time-row").each(function(){

    var thisRow = $(this);
  //  console.log(thisRow);

    var thisRowHr = parseInt(thisRow.attr("id"));
        console.log(thisRowHr);

    // style rows to show where we are in the day
    if (thisRowHr == currentHour) {
        console.log("present")
     thisRow.addClass("present").removeClass("past future");
    }
    if (thisRowHr < currentHour) {
        console.log("past")
      thisRow.addClass("past").removeClass("present future");
    }
    if (thisRowHr > currentHour) {
        console.log("future")
      thisRow.addClass("future").removeClass("past present");
    }
  });
  }


setUpRows()


//load save data from localstorage
$("#9 .input").val(localStorage.getItem("9"));
$("#10 .input").val(localStorage.getItem("10"));
$("#11 .input").val(localStorage.getItem("11"));

//This methodology replaces the one above as it is much simpler to use
//.get item retrieves from local storage, while .set item puts it in local 
//storage
var i;
for (let i =9; i <= 17;i++) {
    $(`#${i} .input`).val(localStorage.getItem(`${i}`));

}











    
})
