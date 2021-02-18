/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    // make the button work
    document.getElementById('run').addEventListener('click', function () {

    //get the exercisedata from the local server
        async function ExerciseData() {
            let data = await fetch("http://localhost:63342/javascript-exercises/_shared/api.json");
            let main = await data.json();
            let hero = main.heroes;
                console.log(hero);

    //get the value from the form box thingy
            let inputHeroGoesHere = document.getElementById("hero-id").value;
                console.log(inputHeroGoesHere);

    //compare the inputvalue from the form with the exercisedata and then display it in the target tag
            for (i=0; i<hero.length;i++){
                if (hero[i].name === inputHeroGoesHere){
                    let allTheHeroes = document.getElementById('tpl-hero').content.cloneNode(true);
                    let list = hero[i];

                    allTheHeroes.querySelector('.name').innerText = list.name;
                    allTheHeroes.querySelector('em.alter-ego').innerText = list.alterEgo;
                    allTheHeroes.querySelector('.powers').innerText = list.abilities;

                    target.appendChild(allTheHeroes);
                }
            }
    }
ExerciseData();

    })




