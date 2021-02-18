/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


    // turns background red
    document.getElementById("red").addEventListener("click", function() {
        document.body.style.backgroundColor = "#c90e1e"});

    //turns background green
    document.getElementById("green").addEventListener("click", function() {
        document.body.style.backgroundColor = "#1f781a"});

    //turns background yellow
    document.getElementById("yellow").addEventListener("click", function() {
        document.body.style.backgroundColor = "#eaed2b"});

    //turns background blue
    document.getElementById("blue").addEventListener("click", function() {
        document.body.style.backgroundColor = "#1959e3"});


    })();
