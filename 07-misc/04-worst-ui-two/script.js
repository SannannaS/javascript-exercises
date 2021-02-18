/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    //getting the start values
    let part1 = document.getElementById("part-one").value;
    let part2 = document.getElementById("part-two").value;
    let part3 = document.getElementById("part-three").value;
    let part4 = document.getElementById("part-four").value;

    part1 = Number(part1) + 460;
    part2 = Number(part2);
    part3 = Number(part3);
    part4 = Number(part4);

    //-------------------------------------------Part1

    document.getElementById("part-one").addEventListener("click", function (){

        if (part1 <= 499){
            part1++;
        }
        else {
            part1 = 460;
        }

        //change the number on the button
        document.getElementById("part-one").innerHTML = part1;

        //change the number in the target
        document.getElementById("target").innerText = "0" + part1
            + document.getElementById("part-two").innerHTML
            + document.getElementById("part-three").innerHTML
            + document.getElementById("part-four").innerHTML;
    })

    //-----------------------------------------part2

    document.getElementById("part-two").addEventListener("click", function (){
        part2++;
        if (part2<10){
            document.getElementById("part-two").innerHTML = "0" + part2;
        } else if (part2 <= 99 && part2 >=10){
            document.getElementById("part-two").innerHTML = part2;
        }
        else {
            part2 = 0;
            document.getElementById("part-two").innerHTML = "0" + part2;
        }

        document.getElementById("target").innerText = "0" + part1
            + document.getElementById("part-two").innerHTML
            + document.getElementById("part-three").innerHTML
            + document.getElementById("part-four").innerHTML;
    })

    //----------------------------------------Part3

    document.getElementById("part-three").addEventListener("click", function (){
        part3++;
        if (part3<10){
            document.getElementById("part-three").innerHTML = "0" + part3;
        } else if (part3 <= 99 && part3 >=10){
            document.getElementById("part-three").innerHTML = part3;
        }
        else {
            part3 = 0;
            document.getElementById("part-three").innerHTML = "0" + part3;
        }

        document.getElementById("target").innerText = "0" + part1
            + document.getElementById("part-two").innerHTML
            + document.getElementById("part-three").innerHTML
            + document.getElementById("part-four").innerHTML;

    })

    //----------------------------------Part4

    document.getElementById("part-four").addEventListener("click", function (){
        part4++;
        if (part4<10){
            document.getElementById("part-four").innerHTML = "0" + part4;
        } else if (part4 <= 99 && part4 >=10){
            document.getElementById("part-four").innerHTML = part4;
        }
        else {
            part4 = 0;
            document.getElementById("part-four").innerHTML = "0" + part4;
        }

        document.getElementById("target").innerText = "0" + part1
            + document.getElementById("part-two").innerHTML
            + document.getElementById("part-three").innerHTML
            + document.getElementById("part-four").innerHTML;
    })


})();
