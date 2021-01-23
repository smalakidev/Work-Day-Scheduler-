//Funciton is what creates functionality. Without it,
//the website won't work.
$(document).ready(function(){

//listening for save button clicks
$(".saveBtn").on("click", function(){
    //We are going up in the DOM with this code here. This allows
    //us to focus in on the saveBtn itself.
    console.log("CLICKED", $(this).parent().attr("id"));
    



});







    
})
