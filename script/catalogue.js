/**
 * Created by dchavezc on 2017-03-23.
 */
'use strict';
/*Declaration de Constants*/
const P_OPEN = '<p>';
const P_CLOSE = '</p>';
const M_OPEN = '<mark>';
const M_CLOSE = '</mark>';

/*Declaration de Variables*/


/*Funtion*/

// // Apelle les Categories page CATALOGUE

function  charger_forfait() {
    console.log('Executer charger_forfait');
    var listeForfaits = document.getElementById('listefotfaits');
    listeForfaits.innerHTML = ""; // vider le ul
    // parcurrir les forfaits
    for (var i = 0; i < forfaits_data.length; i++) {
        listeForfaits.innerHTML += "<li>" + P_OPEN + forfaits_data[i].nom + P_CLOSE + P_OPEN + '$' + forfaits_data[i].prix + P_CLOSE + P_OPEN + forfaits_data[i].ref_forfait + P_CLOSE + P_OPEN + forfaits_data[i].info_cat + P_CLOSE + '<img src="images/forfaits_data[i].img_catalogue">' +"</li>";
    }
}
charger_forfait();