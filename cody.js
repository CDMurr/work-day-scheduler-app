// function for getting the current day. 
//  function for color coding the hours of the day based on current time,....
//   ....to show past, present, and future by color. 


$(document).ready(function () {
    $("#currentDay").text(moment().format("MMM Do YY")); 
});



// save user input to local storage  , 
// set onclick event for the save button for every hour
// add eventlistner to save data to local storage, localStorage,setitem("myItem",value)

localStorage.setitem("hour1",)




// color code function to represent past, present, and future by color
// function to pull in the current time ("hour")&("number") 
// then grab all of the elements with ".time-block" as a class 

// create a for loop for each of these items 
// items meaning each element with the class="time-block"

// if the 
// if the time is = to the current time present 
// if the time tiem is before assign the future class to it. 