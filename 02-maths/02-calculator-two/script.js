/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // to get the value of an input: document.getElementById("element-id").value






    function performOperation (operator, x, y) {
        switch (operator) {
            case 'addition':
                z = x + y;
                alert(z);
                break;
            case 'substraction':
                z = x - y;
                alert(z);
                break;
            case 'multiplication':
                z = x * y;
                alert(z);
                break;
            case 'division':
                z = x / y;
                alert(z);
                break;
        }
    }



    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            let num1 = document.getElementById("op-one").value;
            let num2 = document.getElementById("op-two").value;

            let x = Number (num1);
            let y = Number (num2);
            let z = 0;
            performOperation($btn.id, x, y);

        });
    });
})();
