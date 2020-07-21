/*Requirements are:
1. user can add to-do items to Active
    a. declare variables for input, button, list item and list
    b. add eventListener fo button
    c. move element from input to active list

2. user can move a to-do item to completed by using prepend method
a. verify element is in active list
b. use prepend method to move element from activeList to first item of completedList
*/

/* STEP 1: declare variables
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

/* STEP 2: add eventListener for button and add function to move item to Active List
________________________________________________________________________________________*/

button.addEventListener("click", moveToActiveList)  //calling function by name
function moveToActiveList(event){
    event.preventDefault()
    console.log("button pressed!"); /*test passed*/
    //this code creates a new <li> element:
    let item = document.createElement("li"); 
    item.addEventListener("click",event => {    //added an anonymous function****************************************************
        event.preventDefault()                  // always add a preventDefault before the default action of when event occurs inside of a function
        moveToCompletedList(item);              //call a functiom by name which we passed the item through**********************************
    } );

/*STEP 3: to add text to the <li> element, you must create a text node first. This code creates a text node:
   ___________________________________________________________________________________________________________*/
   
   //************ also, added an input value inside textnode so that whenever we enter a input inside a function, it produces an output***********/
    let textnode = document.createTextNode(input.value);

/*STEP 4: finally, append the new element to an existing element. 
     ___________________________________________________________________________________________________________*/
    item.prepend(textnode); //prepend the text to <li>
    //this code appends the new element to the existing elements
    activeList.prepend(item);
}
function moveToCompletedList(item){
   
/*STEP 5 - use prepend method to move element from activeList to first item of completedList
_________________________________________________________________________________________________________________*/
      completedList.prepend(item);
}

/* STEP 3/Q1: append <li> to <ul> with id="activeList" 
(cite: w3schools.com/jsref/met_node_appendchild.asp)
________________________________________________*/




