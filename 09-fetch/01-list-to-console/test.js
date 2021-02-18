
document.getElementById("run").addEventListener("click",() => {

    async function Getthedata (){
    let data = await fetch ("http://localhost:63342/javascript-exercises/_shared/api.json");
    let show = await data.json();
    console.log(show);
}
Getthedata();

});