/*Requirements are:
1. user can add to-do items to Active
    a. declare variables for input, button, list item and list
    b. add eventListener fo button
    c. move element from input to active list

2. user can move a to-do item to completed by using prepend method
a. verify element is in active list
b. use prepend method to move element from activeList to first item of completedList
*/

/* STEP 1/Q1: declare variables
_________________________________*/

/*Create an html element for input*/
let input = document.getElementById("newTask");
/*Create an html element for button*/
let button = document.getElementById("addBtn");
/*Create an html element for active list and list item*/
let activeList = document.getElementById("activeList");
let listItem = document.querySelector("li");

/* test if elements work by running console.log for each element */
console.log(input);
console.log(button);
console.log(activeList);
console.log(listItem);
/*-----------------------------------------------------------*/

/* STEP 2/Q1: add eventListener for button 
___________________________________________*/

button.addEventListener("click", buttonPressed)
function buttonPressed(event){
    event.preventDefault()
    console.log("button pressed!"); /*test passed*/
}

/* STEP 3/Q1: append <li> to <ul> with id="activeList" 
(cite: w3schools.com/jsref/met_node_appendchild.asp)
_____________________________________________________*/

//this code creates a new <li> element:
let item = document.createElement("li"); 

//to add text to the <li> element, you must create a text node first. This code creates a text node:
let textnode = document.createTextNode("hello world!");

//then you must append the textnode to the <li> element:
item.prepend(textnode); //prepend the text to <li>

//finally, append the new element to an existing element. This code finds an existing element:
// done already>>>>>>>>let activeList = document.getElementById("activeList");

//this code appends the new element to the existing elements
activeList.prepend(item);
//______________________________________________________________________________________________________________________________
//STEP 3/Q2 - use prepend method to move element from activeList to first item of completedList
completedList.prepend(item);


