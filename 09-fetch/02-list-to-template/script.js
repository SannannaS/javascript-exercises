/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(() => {
    // your code here

    document.getElementById('run').addEventListener('click', function () {


        async function ExerciseData() {
            let data = await fetch("http://localhost:63342/javascript-exercises/_shared/api.json");
            let main = await data.json();

            console.log(main.heroes)


            let heroes = main.heroes;

            let target = document.getElementById("target");


            for (let i = 0; i < heroes.length; i++) {

                let xmen = document.getElementById('tpl-hero').content.cloneNode(true);

                let list = heroes[i];

                xmen.querySelector('.name').innerText = list.name;
                xmen.querySelector('em.alter-ego').innerText = list.alterEgo;
                xmen.querySelector('.powers').innerText = list.abilities;

                target.appendChild(xmen);
            }
        }

        ExerciseData();

    })

})();

