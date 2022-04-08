//will give the current date at the top of the page 
document.getElementById("currentDay").textContent = moment().format("MMM Do YY");




// grab the current hour, save into a variable 
const currentHour = moment().hour()
// grab all the elements with time-block 
const timeBlocks = document.getElementsByClassName("time-block")
for( let i = 0; i < timeBlocks.length; i++) {
    const block = timeBlocks.item(i)
    const blockHour = parseInt(block.id.slice(4))
    const task = block.querySelector("textarea")
    const savedTask = localStorage.getItem(blockHour) // Get the task from localStorage using key
    if (savedTask !== null){ // Check to see if task exists
        task.value = savedTask // Assign the value of that saved tasks to the value of the textarea 
    }
    block.querySelector("button").addEventListener("click", function() {
        console.log(block)
        localStorage.setItem(blockHour, task.value)
        console.log(blockHour, task.value)
    })
    // comparing the element hour to the current hour 
    if(blockHour < currentHour) {
        block.className += " past "
    }else if(blockHour == currentHour) {
        block.className += " present "
    }else if(blockHour > currentHour) {
        block.className += " future "
    }
};

