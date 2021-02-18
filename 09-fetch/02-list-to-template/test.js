
document.getElementById("run").addEventListener("click",()=>{
    async function getData() {
        let getTheXmen = await fetch("http://localhost:63342/javascript-exercises/_shared/api.json");
        let show = await getTheXmen.json();
        console.log(show.heroes);


        let heroes = show.heroes;
        let target = document.getElementById("target");

        for (i = 0; i < heroes.length; i++) {
            let xMen = document.getElementById('tpl-hero').content.cloneNode(true);
            let list = heroes[i];
            xMen.querySelector('.name').innerText = list.name;
            xMen.querySelector('em.alter-ego').innerText = list.alterEgo;
            xMen.querySelector('.powers').innerText = list.abilities;
            target.appendChild(xMen);
        }
    }
    getData();
})