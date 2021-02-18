/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    //step 1: get the text from the target element
    let sentence = document.getElementById("target").innerText;
    document.getElementById("target").innerText = "";
    let i = 0;
    let time = 50;


    //step 2: looping through the characters of the sentence, building the output one character at a time
    function typeWriter() {
        if (i<sentence.length){
            document.getElementById("target").innerHTML += sentence.charAt(i);
            i++;
            setTimeout(typeWriter, time);
        }
    }

    typeWriter();

})();
