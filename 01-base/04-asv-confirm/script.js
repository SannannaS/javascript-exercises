/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let gender = prompt ("What is your gender?");
    let age = prompt ("How old are you?");
    let town = prompt ("Where do you live?");

    if (confirm ("You are a " + gender + ". " +"You are " + age + " years old, and you live in " + town)) {
        alert ("thank you!")
    }
    else {
        let gender = prompt ("What is your gender?");
        let age = prompt ("How old are you?");
        let town = prompt ("Where do you live?");

        if (confirm ("You are a " + gender + ". " +"You are " + age + " years old, and you live in " + town)) {
            alert ("thank you!")
        }
        else {
            let gender = prompt("What is your gender?");
            let age = prompt("How old are you?");
            let town = prompt("Where do you live?");
        }
    }

})();
