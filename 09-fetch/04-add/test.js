
async function GetAllData (){
    let data = await fetch ("http://localhost:63342/javascript-exercises/_shared/api.json");
    let main = await data.json();
    let hero = main.heroes;


    document.getElementById("run").addEventListener("click",()=>{
        let newHeroName = document.getElementById("hero-name").value;
        let newHeroAlterEgo = document.getElementById("hero-alter-ego").value;
        let newHeroPower = document.getElementById("hero-powers").value;

        if ((newHeroName.length>0) && (newHeroAlterEgo.length>0) && (newHeroPower.length>0))
        {
             let customHero =
                 {
                 "id": hero.length+1,
                 "name": newHeroName.value,
                 "alterEgo": newHeroAlterEgo.value,
                 "abilities": newHeroPower.value,
                 }
             hero.push(customHero);
             console.log(hero);
        }else {
            console.error("fill in all the blanks please.");
        }
    })
}
GetAllData();
