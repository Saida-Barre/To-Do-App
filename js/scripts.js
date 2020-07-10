{
    console.log("script starting!") //see script starting
   
    const input = document.querySelector("input");              //<input type="txt"
    const addBtn = document.querySelector("button");           //button=addLi()
    const list = document.querySelector("ul");                //<ul id="myAList"</ul>
    const error = document.querySelector("#error-output");   //<p id="error-output"></P>
    
    let itemArray = []; //Running list of all our items.
}

//now,create a new item
function addLi ()
{
    var txtVal = document.getElementById('txtVal').value;
    var listNode = document.getElementById('myAList');
    var liNode = document.createElement('li');
    var txtNode = document.createTextNode(txtVal);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
}