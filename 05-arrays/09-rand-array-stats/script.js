/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
let numbers = [1,11,22,33,42,55,66,77,88,99];

//buttonclick
    document.getElementById("run").addEventListener("click", function() {


//alle nummers in de tabel plaatsen//
        document.getElementById("n-1").innerText = (numbers[0]);
        document.getElementById("n-2").innerText = (numbers[1]);
        document.getElementById("n-3").innerText = (numbers[2]);
        document.getElementById("n-4").innerText = (numbers[3]);
        document.getElementById("n-5").innerText = (numbers[4]);
        document.getElementById("n-6").innerText = (numbers[5]);
        document.getElementById("n-7").innerText = (numbers[6]);
        document.getElementById("n-8").innerText = (numbers[7]);
        document.getElementById("n-9").innerText = (numbers[8]);
        document.getElementById("n-10").innerText = (numbers[9]);

//the smallest number is//
        let smallest = Math.min(...numbers);
        document.getElementById("min").innerHTML = (smallest);

//the biggest number is//
        let biggest = Math.max(...numbers);
        document.getElementById("max").innerHTML = (biggest);

//the sum of all numbers is//
        let sum = numbers.reduce(function (a, b) {
            return a + b;
        }, 0);
        document.getElementById("sum").innerHTML = (sum);

//the average of all numbers is//
        let average = sum / numbers.length;
        document.getElementById("average").innerHTML = (average);

    });

})();
