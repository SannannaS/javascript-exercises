/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let gallery= [
        "img/bell.svg",
        "img/clock.svg",
        "img/compass.svg",
        "img/lemon.svg",
        "img/map.svg",
    ];

    // your code here
    let image = document.querySelector('img');
    let x = 0;


    document.getElementById("next").addEventListener("click", function() {

    x += 1;
            if (x > gallery.length-1) {
                x=0;
            }
        image.src = gallery[x];
    });



})();
