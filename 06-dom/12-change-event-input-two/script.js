/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

//step1: Listen for changes in the input field
    document.getElementById("pass-one").addEventListener("keyup", function(){
        let input = document.getElementById("pass-one").value;
        let lookForNumbers = /[0-9]/g;
        let numbersFound = input.match(lookForNumbers);
        console.log(numbersFound);
//step 2: check if what was given into the inputfield is at least 8 characters long and has at least 2 numbers in it.
        if(input.length >= 8 && numbersFound.length > 1){
            document.getElementById("validity").innerText = "ok";
        }
        else{
            document.getElementById("validity").innerText = "Not ok";
        }
    })








})();
