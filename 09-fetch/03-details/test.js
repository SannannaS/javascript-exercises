
document.getElementById("run").addEventListener("click",()=>{

    async function ExerciseData() {
        let data = await fetch("http://localhost:63342/javascript-exercises/_shared/api.json");
        let main = await data.json();
        let hero = main.heroes;

        let inputHeroGoesHere = document.getElementById("hero-id").value;

        for(i=0; i<hero.length; i++){
            if (inputHeroGoesHere ===hero[i].name){
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