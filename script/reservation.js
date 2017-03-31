/**
 * Created by dchavezc on 2017-03-23.
 */
'use strict';

"use strict";

var formulaire; // L'élément form


/**
 * Handler de synchonisation
 */
$(function () {
    console.log('DOM Construit');
    // Variable de formulaire
    formulaire = $('#reservation');
    // Brancher le boutno
    formulaire.on('submit', valider_formulaire);
    lire_input_ecrire_table();
    // charger_prix();
});

/**
 * Fonction de validation du formulaire
 */
function valider_formulaire(event) {
    console.log('Tentative de soumission');
    var form_est_valide = true;
    // var input_teleph = true;

    // VALIDATION  INPUT TYPE TEXTE ---- ok

    var input_nom = $('input[type="text"]');
    // Variable booléenne contient la validité du champ nom
    var nom_valide = input_nom.val().trim().length >= 1;
    console.log(nom_valide);
    if (!nom_valide) {
        form_est_valide = false;
        input_nom.addClass('error');
        if (!input_nom.next().is('span.error')) {
            input_nom.after('<span class="error">* Champ Requis</span>');
        }
    } else { // Le champ est valide : Retirer la classe
        input_nom.removeClass('error');
        if (input_nom.next().is('span.error')) { // Si le input a un frère successeur
            input_nom.next().remove(); // Le supprimer
        }
    }

    // VALIDATION  INPUT TELEPHON

    var input_teleph = $('input[type="tel"]');
    console.log(input_teleph);
    var telph_no_valide = ($(input_teleph).val().length < 1) && (isNaN($(input_teleph).val())) && ($(input_teleph).val().length < 10);
    if (!telph_no_valide) {
        form_est_valide = false;
        console.log(input_nom);
        input_teleph.addClass('error');
        if (!input_teleph.next().is('span.error')) {
            input_teleph.after('<span class="error">* Champ Requis</span>');
        }
    } else {
        input_teleph.removeClass('error');
        if (input_teleph.next().is('span.error')) { // Si le input a un frère successeur
            input_teleph.next().remove(); // Le supprimer
        }
    }

    // VALIDATION INPUT TYPE EMAIL --- ojoooo
    //
    // var input_email = $('input#email');
    // console.log(input_email);
    // var email_no_valide = (($(input_email).val().length < 1) && (($(input_email).val().indexOf('@', 0) == -1) || ($(input_email).val().indexOf('.', 0) == -1)));
    // if(! email_no_valide) {
    //     form_est_valide = false;
    //     input_email.addClass('error');
    //     if ( ! input_email.next().is('span.error')) {
    //         input_email.after('<span class="error">* Champ Requis</span>');
    //     }
    // } else {
    //     input_email.removeClass('error');
    //     if (input_email.next().is('span.error')) { // Si le input a un frère successeur
    //         input_email.next().remove(); // Le supprimer
    //     }
    // }

    var sEmail = $('#email').val();
    console.log(sEmail);
// Checking Empty Fields
    if ($.trim(sEmail).length == 0) {
        form_est_valide = false;
        sEmail.addClass('error');
        if (!sEmail.next().is('span.error')) {
            sEmail.after('<span class="error">* Champ Requis</span>');
        }
    } else if (validateEmail(sEmail)) {
        sEmail.removeClass('error');
        if (sEmail.next().is('span.error')) { // Si le input a un frère successeur
            sEmail.next().remove(); // Le supprimer
        }
    }

    function caracteresCorreoValido(email, div){
        console.log(email);
        //var email = $(email).val();
        var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

        if (caract.test(email) == false){
            $(div).hide().removeClass('hide').slideDown('fast');

            return false;
        }else{
            $(div).hide().addClass('hide').slideDown('slow');
//        $(div).html('');
            return true;
        }
    }



        // VALIDATION INPUT TYPE SELECT

        var select_ville = $('#province');
        var ville_valide = (select_ville.val() != '-1');
        if (!ville_valide) {
            form_est_valide = false;
            select_ville.addClass('error');
            if (!select_ville.next().is('span.error_')) {
                select_ville.after('<span class="error">* Champ Requis.</span>');
            }
        } else { // Le champ est valide : Retirer la classe
            select_ville.removeClass('error');
            if (select_ville.next().is('span.error')) { // Si le input a un frère successeur
                select_ville.next().remove(); // Le supprimer
            }
        }


        // Si le formulaire n'est pas valide, on intercepte la soumission
        if (!form_est_valide) {
            console.log('Soumission interrompue');
            event.preventDefault();
        }


    }


// remplir la cantite de personne et d'animaux dans la table

    function lire_input_ecrire_table() {
        console.log('prueba');

        $('#pers, #animaux').on('keyup', function () {

            // add le numbre de personnes au table
            var input_pers = $('#pers').val(); // recueramos el valor de input #persona
            console.log(input_pers);
            var table = $('table').find('tr');
            var cantt_personnes = table.eq(2).find('td').eq(0).text(input_pers);
            console.log(cantt_personnes);


            // add le numbre de animaux au table
            var input_animaux = $('#animaux').val();  // recueramos el valor de input #animaux
            console.log(input_animaux);
            var cantt_animaux = table.eq(1).find('td').eq(0).text(input_animaux);
            console.log(cantt_animaux);


        });
    }

// calculer le prix total

// function charger_prix() {
//     console.log('Executer charger_prix');
//     var categ_Forfaits = document.getElementById('list_categorie');
//     categ_Forfaits.innerHTML = ""; // vider le ul
//     // parcurrir les categories
//     for (var i = 0; i < categories.length; i++) {
//         categ_Forfaits.innerHTML += "<option>" + categories[i] + "</option>";
//     }
//









