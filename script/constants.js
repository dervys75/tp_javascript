/**
 * Created by dchavezc on 2017-03-24.
 */
'use strict';
/*Declaration de Constants*/
const PARG_O = '<p>';
const PARG_C = '</p>';
const MARK_O = '<mark>';
const MARK_C = '</mark>';
const IMG_PATH ="http://p86-tp-forfaits.projetisi.com/images/";
const H1_O = '<h1>';
const H1_C = '</h1>';
const H2_O = '<h2>';
const H2_C = '</h2>';
const H3_O = '<h3>';
const H3_C = '</h3>';
const H4_O = '<h4>';
const H4_C = '</h4>';

/*Declaration de Variables*/


/*Funtion*/

/**
 * Lire un paramètre dans une url, fournie ou prise dans l'url de la page
 * Par exemple si l'URL de la page est l'adresse index.html?mon_param=ma_valeur
 * La fonction getParameterByName('mon_param') renvoie la chaîne 'ma_valeur'
 * Si le paramètre url est fourni à l'appel, la fonction prend cette valeur au lien de l'url de la page
 * @param name: nom du paramètre à lire
 * @param url: url où lire le paramètre
 * @returns {Array|{index: number, input: string}|string}
 */
function getParameterByName(name, url) {
    if ('undefined' == typeof url) {
        url = window.location.search;
    }
    var match = new RegExp('[?&]' + name + '=([^&]*)').exec(url);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
