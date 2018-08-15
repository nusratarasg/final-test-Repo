/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function(){
     "use strict"
    function Start() {
        // local variable
        let title = document.title;
        switch(title) {
            case "COMP125 - Home":
            break;
            case "COMP125 - About":
            break; 
        }
        let ABOUTBUTTON = document.getElementById("ABOUTBUTTON")

        ABOUTBUTTON.addEventListener("click", function(){

            Console.log("About Button was clicked")
        });
        console.log("App Started!");
        console.log("----------------------------");
        console.log("Title: " + title);
    }

    window.onload = Start;
})();