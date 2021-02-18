/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


//make the random number generator between 0 and 100 + ask the user to guess said number

    let x = Math.floor((Math.random()*100)+1);

        //ask the user to guess the number
        let guess = Number(prompt("Can you guess the number?"));
        let counter = 1;

        //make the script respond "higher" or "lower" or "that's it!" and make the script tell how many guesses were needed.
        while (guess !== x) {

        if (guess < x) {
            counter++;
            guess = prompt("higher");
        } else if (guess > x) {
            counter++;
            guess = prompt("lower");
        } else {
        alert("That's it! You needed " + counter + " guesses!");
        break;
        }
    }

})();
