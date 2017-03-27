/**
 * Created by dchavezc on 2017-03-20.
 */

'use strict';


/*Funtion*/
//
// Apelle les Categories page INDEX

function color(elEvento){
    console.log('Change couleur menu');
   var evento = elEvento || window.event;
   var tipo = evento.type;
    if (tipo == "click") {
        this.style.color = "whit";
    }
    else if (tipo == "dblclick") {
        this.style.color = "olive";
    }
}
window.onload = function() {
    document.getElementsByClassName("colores").onclick = color;
    document.getElementsByClassName("colores").ondblclick = color;
};





function charger_categories() {
    console.log('Executer charger_Categories');
    var categ_Forfaits = document.getElementById('list_categorie');
    categ_Forfaits.innerHTML = ""; // vider le ul
    // parcurrir les categories
    for (var i = 0; i < categories.length; i++) {
        categ_Forfaits.innerHTML += "<option>" + categories[i] + "</option>";
    }

}
charger_categories();








// function faire_paragraphe(phrase) {
//     if ('undefined' == typeof phrase) { // Phrase pas fourni à l'appel
//         phrase = ''; // Valeur par defaut
//     }
//     return P_OPEN + phrase + P_CLOSE;
// }
//
// var phrase;
//
// phrase = prompt("Veuillez ecrire une premiere phrase");
// document.write(faire_paragraphe(phrase));
//
// phrase = prompt("Veuillez ecrire une deuxieme phrase");
// document.write(faire_paragraphe(phrase));