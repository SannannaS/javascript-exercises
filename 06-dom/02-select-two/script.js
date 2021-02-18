/* becode/javascript
 *
 * /06-dom/02-select-two/script.js - 6.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    document.querySelector('#target').innerHTML = "owned";


  /* Poging 1
$("#target").each(function(){
    $(this).html( $(this).innerHTML().replace(/"Haha, you will never change me!"/g,"Owned") );
    });


 poging 2
$("target").replaceText("Haha, you will never change me!", "Owned!")

poging 3 (deze werkt!)
  document.body.innerHTML = document.body.innerHTML.replace('Haha, you will never change me!', 'owned');


   iets toevoegen in html is blijkbaar NIET de bedoeling!

  poging 4 ( wel met toevoeging in html :  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> )

    $(document).ready(function(){
        $("target").ready(function(){
            $("p:last").replaceWith("Owned");
        });
   });
   */



})();
