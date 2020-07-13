console.log("script starting!") //see script starting
// 1. Name button, input (in html)
//button id=addBtn (created in html)
//input id=newTask (create in html)

// 2. Assign variables
const input = document.getElementById("newTask");            
const button = document.querySelector("#addBtn");           
// 3. ADD THE EVENT LISTENER ..> ACTIONNNNNN
button.addEventListener("click", buttonPressed);
function buttonPressed() {

    console.log("Button was pressed!");
      // Do your stuff here
    input.innerHTML = "new task!";  
  
}
function addLi()
{
    var newTask = document.getElementById("newTask").Value;
        listNode = document.getElementById("activeList");
    //4. create a <li> node
        liNode = document.createElement("li");
    //5. create a textnode
        textnode = document.createTextNode("newTask");

    //6. append the text to <li>
        //node.appendChild(textnode);
    //7. Append <li> to <ul> with id="activeList"   
        //listNode.appendChild(node);
        document.getElementById("activeList").appendChild(node);  
}
console.log("script starting!") //see script starting
