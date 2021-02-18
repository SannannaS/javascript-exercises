/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
GetAllAPIData();

async function GetAllAPIData(){
    let data = await fetch ("http://localhost:63342/javascript-exercises/_shared/api.json");
    let main = await data.json();
    let heroes = main.heroes;

    document.getElementById("run").addEventListener("click",()=>
    {
        let HeroId = document.getElementById("hero-id").value;


        for(i=0;i<heroes.length;i++)
        {
         let hero = heroes[i];

            if(hero.name === HeroId)
            {
            delete heroes[i];
            console.log(heroes);
            }
        }

    })
}