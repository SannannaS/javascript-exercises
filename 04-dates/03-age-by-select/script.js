/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let today_date = new Date();
    let today_year = today_date.getFullYear();
    let today_month = today_date.getMonth();
    let today_day = today_date.getDate();

   document.getElementById("run").addEventListener("click", function(){

        let dob_year = document.getElementById("dob-year").value;
        let dob_month = document.getElementById("dob-month").value;
        let dob_day = document.getElementById("dob-day").value;

        let birth_year = Number(dob_year);
        let birth_month = Number(dob_month);
        let birth_day = Number(dob_day);

        let age = today_year - birth_year;

        if ( today_month < (birth_month - 1)) {
            age--;
        }
        if (((birth_month - 1) === today_month) && (today_day < birth_day)) {
            age--;
        }
        alert(age);
    });



})();
