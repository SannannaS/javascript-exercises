/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

//function to write everything to the target
    function setTarget(){
        document.getElementById("target").innerText = "0"
            + document.getElementById("part-one").value
            + document.getElementById("part-two").value
            + document.getElementById("part-three").value
            + document.getElementById("part-four").value;
    }

//Everything to do with button 1//--------------------------------------------------------------------------

    /*setting al variables*/
    let part1min = Number(document.getElementById("part-one").getAttribute("data-min"));
    let part1max = Number(document.getElementById("part-one").getAttribute("data-max"));
    let part1 = part1min;
    let speed1 = setInterval(slots, 100);

    //getting the slot to stop//
    document.getElementById("fix-part-one").addEventListener("click", function() {
        stop();
    });

    //the slot: letting the numbers rotate//
    function slots(){
        if(part1<=part1max){
            document.getElementById("part-one").value = part1;
            part1++;
        } else if(part1 = part1max){
            part1=part1min;
        }
        setTarget();
    }

    //function to stop the rotating slot//
    function stop() {
        clearInterval(speed1);
    }


//Everything to do with button 2//--------------------------------------------------------------------------

    let part2min = Number(document.getElementById("part-two").getAttribute("data-min"));
    let part2max = Number(document.getElementById("part-two").getAttribute("data-max"));
    let part2 = part2min;
    let speed2 = setInterval(slots2, 150);

    document.getElementById("fix-part-two").addEventListener("click", function() {
        stop2();
    });

    function slots2(){
        if(part2<=part2max){
            if(part2<10){
                document.getElementById("part-two").value = "0"+ part2;
            } else {
                document.getElementById("part-two").value = part2;
            }
            part2++;
        } else if(part2=part2max){
            part2=part2min;
        }
        setTarget();
    }

    function stop2() {
        clearInterval(speed2);
    }


    //Everything to do with button 3//---------------------------------------------------------------------------

    let part3min = Number(document.getElementById("part-three").getAttribute("data-min"));
    let part3max = Number(document.getElementById("part-three").getAttribute("data-max"));
    let part3 = part3min;
    let speed3 = setInterval(slots3, 200);

    document.getElementById("fix-part-three").addEventListener("click", function() {
        stop3();
    });

    function slots3(){
        if(part3<=part3max){
            if(part3<10){
                document.getElementById("part-three").value = "0"+ part3;
            } else {
                document.getElementById("part-three").value = part3;
            }
            part3++;
        } else if(part3=part3max){
            part3=part3min;
        }
        setTarget();
    }

    function stop3() {
        clearInterval(speed3);
    }

    //Everything to do with button 4//------------------------------------------------------------------------

    let part4min = Number(document.getElementById("part-four").getAttribute("data-min"));
    let part4max = Number(document.getElementById("part-four").getAttribute("data-max"));
    let part4 = part4min;
    let speed4 = setInterval(slots4, 250);

    document.getElementById("fix-part-four").addEventListener("click", function() {
        stop4();
    });

    function slots4(){
        if(part4<=part4max){
            if(part4<10){
                document.getElementById("part-four").value = "0"+ part4;
            } else {
                document.getElementById("part-four").value = part4;
            }
            part4++;
        } else if(part4=part4max){
            part4=part4min;
        }
        setTarget();
    }

    function stop4() {
        clearInterval(speed4);
    }


})();
