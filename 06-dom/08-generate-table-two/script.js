/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let table = document.createElement("table");

    for (x=0; x<10;x++){
        let row = table.insertRow(x);
        for (y=0; y<10;y++){
            let cell = row.insertCell(y);
            cell.innerHTML = (x+1) * (y+1);
        }
    }


    let target = document.getElementById("target");
    target.appendChild(table);


})();
