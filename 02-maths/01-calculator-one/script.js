/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value


    let num1 = document.getElementById("op-one");
    let num2 = document.getElementById("op-two");


    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let x = Number (num1.value);
        let y = Number (num2.value);
        let result = x + y;
        alert ("the result of " + x + " + " + y + " is " + result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let x = Number (num1.value);
        let y = Number (num2.value);
        let result = x - y;
        alert ("the result of " + x + " - " + y + " is " + result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let x = Number (num1.value);
        let y = Number (num2.value);
        let result = x * y;
        alert ("the result of " + x + " * " + y + " is " + result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let x = Number (num1.value);
        let y = Number (num2.value);
        let result = x / y;
        alert ("the result of " + x + " / " + y + " is " + result);
    });







})();
