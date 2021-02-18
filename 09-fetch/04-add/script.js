/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    async function ExerciseData() {
        let data = await fetch("http://localhost:63342/javascript-exercises/_shared/api.json");
        let main = await data.json();
        let hero = main.heroes;

        let newName = document.getElementById("hero-name");
        let newAlter = document.getElementById("hero-alter-ego");
        let newPower = document.getElementById("hero-powers");

        document.getElementById('run').addEventListener('click', function () {
            newName = document.getElementById("hero-name").value;
            newAlter = document.getElementById("hero-alter-ego").value;
            newPower = document.getElementById("hero-powers").value;
            let newPowerArray = newPower.split(",");
            if ((newName.length>0) && (newAlter.length>0) && + (newPower.length>0)){
                let newHero = {
                    "id": hero.length+1,
                    "name": newName,
                    "alterEgo": newAlter,
                    "abilities": newPowerArray
                }
                hero.push(newHero);
                console.log(hero);
            } else {
                console.error("enter all values");
            }
            })
        }

    ExerciseData();

