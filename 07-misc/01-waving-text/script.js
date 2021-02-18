/* becode/javascript
 *
 * /07-misc/01
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
    let output = "";
    let fontsize =[1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2];

//step 2: looping through the sentence, assigning each character a fontsize
    for (i=0; i < sentence.length; i++){
        let x = (i+12) % 12; //simple math to loop through the fontsize array
        let char = sentence.charAt(i);
        char = char.fontsize(fontsize[x]);
//step 3: building the output one styled character at a time
        output = output + char;
    }

//step 4: making the output visible on the website
    document.getElementById("target").innerHTML = output;


})();
