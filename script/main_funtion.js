/**
 * Created by dchavezc on 2017-03-20.
 */

'use strict';

/*Declaration de Constants*/
const P_OPEN = '<p>';
const P_CLOSE = '</p>';
const M_OPEN = '<mark>';
const M_CLOSE = '</mark>';

/*Declaration de Variables*/


/*Funtion*/
//
// Apelle les Categories page INDEX

function charger_categories() {
    console.log('Executer charger_Categories');
    var categ_Forfaits = document.getElementById('list_categorie');
    categ_Forfaits.innerHTML = ""; // vider le ul
    // parcurrir les categories
    for (var i = 0; i < categories.length; i++) {
        categ_Forfaits.innerHTML += "<li>" + categories[i] + "</li>";
    }
}
charger_categories();



// // Apelle les Categories page CATALOGUE

function  charger_forfait() {
    console.log('Executer charger_forfait');
    var listeForfaits = document.getElementById('listefotfaits');
    listeForfaits.innerHTML = ""; // vider le ul
    // parcurrir les forfaits
    for (var i = 0; i < forfaits_data.length; i++) {
        listeForfaits.innerHTML += "<li>" + P_OPEN + forfaits_data[i].nom + P_CLOSE + P_OPEN + '$' + forfaits_data[i].prix + P_CLOSE + P_OPEN + forfaits_data[i].ref_forfait + P_CLOSE + P_OPEN + forfaits_data[i].info_cat + P_CLOSE + '<img src="forfaits_data[i].img_catalogue">' +"</li>";
    }
}
charger_forfait();


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