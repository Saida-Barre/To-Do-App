<!DOCTYPE html>
<html lang="en">
    <head>
        <title>My To-Do List</title>
        <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">        
        <meta name="description" content="A website that will manage a to-do list.">
        <meta name="author" content="Saida Barre">
        
        <link rel="stylesheet" type="text/css" href="css/reset.css" />
        
        <link rel="stylesheet" type="text/css" href="css/style.css">
        
        <script src="js/scripts.js" defer></script>    
    </head>
    <body>
        <!-- I don't see any of these classes being used in any of your other code.
                        Are you sure that you need them? Because if you don't need them then you should remove them. -->
        <section class="container">
            <h1>To Do App </h1>
            <section>
        <!---To-Do Form--->
                <h2>To-Do Form</h2>
                <!-- <form> -->
                    <!-- I don't see any of these classes being used in any of your other code.
                        Are you sure that you need them? Because if you don't need them then you should remove them. -->
                    <div class="To-Do Form container box"> 
                        <!-- The for attribute in your label has to match the name or id of your input.
                            This attribute is telling the DOM, Google's web crawlers, and screen readers for blind people
                            that this label is for that input. -->
                        <label for="newTask">New task</label>
                        <input type="text" id="txtVal" Placeholder="Title..."/>
                        <button onclick="addAnLi()">Add</button>
                    </div> 
                    <p id="error-output"></p>          
                <!-- </form>  -->
            </section> 
           
            <!---Active To-Dos--->
            <!-- I don't see any of these classes being used in any of your other code.
                        Are you sure that you need them? Because if you don't need them then you should remove them. -->
            <div class="active to-do list box">
                <h2>Active To-Dos</h2>
                <ul id="myAList">
                    <!-- You don't need to have <li> in your html because you will add these later using JavaScript.
                        So start with an empty list and let the user fill the list with items that they create in the form -->
                    <!-- <li><input type="checkbox"></li>
                    <li><input type="checkbox"></li>
                    <li><input type="checkbox"></li> -->
                </ul> 
            </div>
           
            <!---Completed To-Dos--->
            <!-- I don't see any of these classes being used in any of your other code.
                        Are you sure that you need them? Because if you don't need them then you should remove them. -->
            <div class="completed to-do list box">
                <h2>Completed To-Dos</h2>
                <ul id="myCList">
                    <!-- You don't need to have <li> in your html because you will add these later using JavaScript.
                        Same as before, start with an empty list
                        Items will be added to the list when the user clicks on items from the previous list -->
                    <!-- <li>Task Name<button class="Delete">Delete</button></li> -->
                </ul>  
                </div>
            </section>
        </main>
    </header>
</body>