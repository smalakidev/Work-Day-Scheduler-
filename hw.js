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

    console.log(time, value)

//This is where the key and value pairs come together and are saved to 
//the local storage. Key is Time. Value is value in this case.
    localStorage.setItem(time, value);

});

console.log(moment().hours())

function hourUpdate(){
var currentHr = 12;
//check if weve moved past this time
//use .each to go through each row(Look it up)
//Use conditionals to compare

}














//load save data from localstorage
$("#9 .input").val(localStorage.getItem("9"));
$("#10 .input").val(localStorage.getItem("10"));
$("#11 .input").val(localStorage.getItem("11"));









    
})
