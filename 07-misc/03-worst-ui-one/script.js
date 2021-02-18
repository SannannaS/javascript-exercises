/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    //make the number change as you move the slider over the screen
    document.getElementById("slider").addEventListener("mousemove", function (){

    //get the value of the position of the slider
    let value = document.getElementById("slider").value;

    //show the value, prefixed by a zero to make it a phone number
    document.getElementById("target").innerText = "0" + value;

})

})();
