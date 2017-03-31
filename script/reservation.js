/**
 * Created by dchavezc on 2017-03-23.
 */
'use strict';

"use strict";

var formulaire; // L'élément form

/**
 * Handler de synchonisation
 */
$(function(){
    console.log('DOM Construit');
    // Variable de formulaire
    formulaire = $('#reservation');
    // Brancher le boutno
    formulaire.on('submit', valider_formulaire);
    // entre_dates_tablea();
});

/**
 * Fonction de validation du formulaire
 */
function valider_formulaire(event) {
    console.log('Tentative de soumission');
    var form_est_valide = true;

    // validation  INPUT TYPE TEXTE ---- ok

    var input_nom = $('input[type="text"]');
    // Variable booléenne contient la validité du champ nom
    var nom_valide = input_nom.val().trim().length >= 1;
    console.log(nom_valide);
    if ( ! nom_valide) {
        form_est_valide = false;
        input_nom.addClass('error');
        if ( ! input_nom.next().is('span.error')) {
            input_nom.after('<span class="error">Champ Requis</span>');
        }
    } else { // Le champ est valide : Retirer la classe
        input_nom.removeClass('error');
        if (input_nom.next().is('span.error')) { // Si le input a un frère successeur
            input_nom.next().remove(); // Le supprimer
        }
    }


    // Champ ville : une ville est sélectionnée INPUT TYPE SELECT

    var select_ville = $('#province');
    var ville_valide = (select_ville.val() != '-1');
    if ( ! ville_valide) {
        form_est_valide = false;
        select_ville.addClass('error');
        if ( ! select_ville.next().is('span.error_')) {
            select_ville.after('<span class="error">* Champ Requis.</span>');
        }
    } else { // Le champ est valide : Retirer la classe
        select_ville.removeClass('error');
        if (select_ville.next().is('span.error')) { // Si le input a un frère successeur
            select_ville.next().remove(); // Le supprimer
        }
    }

// add le numbre de personnes au table
    var input_pers = $('#pers').val(); // recueramos el valor de los input
    console.log(input_pers);
    var cantt_personnes = $('table').find('tr').eq(3).find('td').eq(0).text(input_pers);
    console.log(cantt_personnes);
    // var cantt_personnes = $(table_tr).eq(3).find('td').eq(0).text(input_pers);
    // console.log(cantt_personnes);


    // add le numbre de animaux au table
    var input_animaux = $('#animaux').val();
    console.log(input_animaux);
    var cantt_animaux = $('table').find('tr').eq(2).find('td').eq(0).text(input_animaux);
    console.log(cantt_animaux);

    // Si le formulaire n'est pas valide, on intercepte la soumission
    if ( ! form_est_valide) {
        console.log('Soumission interrompue');
        event.preventDefault();
    }
}










