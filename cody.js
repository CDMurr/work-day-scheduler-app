// function for getting the current day. 
//  function for color coding the hours of the day based on current time,....
//   ....to show past, present, and future by color. 


$(document).ready(function () {
    $("#currentDay").text(moment().format("MMM Do YY")); 
});