// document will get the element by id, then its textContent will = moment()
// will get the current day 
document.getElementById("currentDay").textContent = moment().format("MMM Do YY");


// grab the current hour, save into a variable 
// grab all the elements with time-block 
// loop over those elemenets
// comparing the element hour to the current hour 

var currentHour = moment().hour()
var timeBlocks = document.getElementsByClassName("time-block")
for( var i = 0; i < timeBlocks.length; i++) {
    var block = timeBlocks.item(i)
    var blockHour = parseInt(block.id.replace("hour", ""))
    console.log(blockHour);
    // if statement for if block hour is less than current hour then grey class= past
    if(blockHour < currentHour) {
        block.className += " past "
    }
    // else if for for equal to current hour goes after purple bracket
    // then another else if for if  
}
// else if statement for equal to current hour 





// save user input to local storage  , 
// set onclick event for the save button for every hour
// add eventlistner to save data to local storage, localStorage,setitem("myItem",value)
var saveButton = document.querySelector("#save");
var task = document.querySelector("#task")


saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    var todo = {
        task: task.value.trim()
    }

    localStorage.setItem("9:00", JSON.stringify(todo));
});








// color code function to represent past, present, and future by color
// function to pull in the current time ("hour")&("number") 
// then grab all of the elements with ".time-block" as a class 

// create a for loop for each of these items 
// items meaning each element with the class="time-block"

// if the 
// if the time is = to the current time present 
// if the time tiem is before assign the future class to it. 