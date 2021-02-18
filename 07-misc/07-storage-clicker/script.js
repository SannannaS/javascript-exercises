/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here

    //let the button count the clicks

document.getElementById("increment").addEventListener("click",function(){

    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("target").innerHTML = localStorage.clickcount;
    }


    //let the script store all the counts in the localStorage, even if you refresh the page




    // let the script read the counts in localStorage and display it in the target




});











})();
