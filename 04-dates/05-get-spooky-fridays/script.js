/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        let input_year = document.getElementById("year").value;
        let year = Number(input_year);
        let month;

        for (month = 0; month < 12; month++) {
            let day = new Date(year, month,13);
            let weekday = day.getDay();
            if (weekday === 5) {
                switch (month) {
                    case 0:
                        alert('January');
                        break;
                    case 1:
                        alert('February');
                        break;
                    case 2:
                        alert('March');
                        break;
                    case 3:
                        alert('April');
                        break;
                    case 4:
                        alert('May');
                        break;
                    case 5:
                        alert('June');
                        break;
                    case 6:
                        alert('July');
                        break;
                    case 7:
                        alert('August');
                        break;
                    case 8:
                        alert('September');
                        break;
                    case 9:
                        alert('October');
                        break;
                    case 10:
                        alert('November');
                        break;
                    case 11:
                        alert('December');
                        break;
                }
            }
        }

    });
})();
