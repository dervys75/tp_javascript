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

function faire_paragraphe(phrase) {
    if ('undefined' == typeof phrase) { // Phrase pas fourni à l'appel
        phrase = ''; // Valeur par defaut
    }
    return P_OPEN + phrase + P_CLOSE;
}

var phrase;

phrase = prompt("Veuillez ecrire une premiere phrase");
document.write(faire_paragraphe(phrase));

phrase = prompt("Veuillez ecrire une deuxieme phrase");
document.write(faire_paragraphe(phrase));