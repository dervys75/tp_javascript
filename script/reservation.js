/**
 * Created by dchavezc on 2017-03-23.
 */
'use strict';


var formulaire; // L'élément form
var forfid;
var forfait_detaille;
var mb_data = {
    'container': null
};

/**
 * Handler de synchonisation
 */
$(function () {

    console.log('DOM Construit');

    var forfid = getParameterByName('forfid');
    if (forfid != null) {
        console.log('Réservation du forfait index =', forfid);
        // Les data du forfait
        var forfait = forfaits_data[forfid];
        $('.imges').html('<img src="' + IMG_PATH + forfait.photo1 + '"/>');
        $('.nom_forfait').text(' ' + forfait.nom);
        $('.ref_detail').text(' ' + forfait.ref_forfait + '.');
        $('.prix_forf').text(parseFloat(forfait.prix).toFixed(2) + ' $');
        $('.sejour').text(forfait.duree + ' Jours.');
        $('table').find('tr').eq(1).find('td').eq(1).text(parseFloat(forfait.prix_animal).toFixed(2) + ' $');
        $('table').find('tr').eq(2).find('td').eq(1).text(parseFloat(forfait.prix).toFixed(2) + ' $');
        $('#animaux').attr('max', forfait.max_animaux);


    }

    // Variable de formulaire
    formulaire = $('#reservation');
    // Brancher le boutno
    formulaire.on('submit', valider_formulaire);
    // appel de funtion
    // lire_input_ecrire_table();
    mb_create_container();
    // entre_animaux();
    // charger_prix();

    $('#pers, #animaux').on('change', function () {
        if ($(this).val() === '' || parseInt($(this).val()) < 0 ) {
            $(this).val(0);
        }
        lire_input_ecrire_table();
    });

    $('#sumetre').on('click', function () {
        mb_open('#conditions', '.ok,.cancel');
    });
    $('.ok').on('click', function () {
        mb_open('#recapitulatif', '.fermer', {'background-color': 'red', 'opacity': '0.3'});
    });

    lire_input_ecrire_table();
});

// chargement du forfait choisir


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
    var telph_valide = ($(input_teleph).val().length < 1) && (isNaN($(input_teleph).val())) && ($(input_teleph).val().length < 10);
    if (!telph_valide) {
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

    // VALIDATION  INPUT EMAIL

    var sEmail = $('input#email');
    console.log(sEmail);
    var emailValue = $(sEmail).val().trim();
    var sEmail_valid = (emailValue.length > 5);
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    // Checking Empty Fields
    if (!sEmail_valid || (caract.test(emailValue) === false)) {
        form_est_valide = false;
        sEmail.addClass('error');
        if (!sEmail.next().is('span.error')) {
            sEmail.after('<span class="error">* Champ Requis</span>');
        }
    } else {
        sEmail.removeClass('error');
        if (sEmail.next().is('span.error')) { // Si le input a un frère successeur
            sEmail.next().remove(); // Le supprimer
        }
    }


    // VALIDATION INPUT TYPE SELECT VILLE

    var select_ville = $('#province');
    var ville_valide = (select_ville.children('option').val() != '-1');
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


//TABLEAU
// remplir la cantite de personne et d'animaux dans la table

function lire_input_ecrire_table() {
    console.log('prueba');

    var table = $('table').find('tr');
    var in_c_anim;
    var cantt_animaux;
    var cantt_personnes;

    // add le numbre de animaux au table

    cantt_animaux = parseInt($('#animaux').val());  // recueramos el valor de input #animaux
    table.eq(1).find('td').eq(0).text(cantt_animaux); // escrir la valeur d'input cantite de animaux dans la table
    console.log(cantt_animaux);
    // console.log(table.eq(1).find('td').eq(0).text(cantt_animaux));

    // total a payer por les animaux
    var val_Prix_anim = parseFloat(table.eq(1).find('td').eq(1).text()); // recuperamos le prix animaux et on ecribe dan la table
    var anim_total = cantt_animaux * val_Prix_anim; // calculer le prix total de animaux
    console.log(anim_total);
    table.eq(1).find('td').eq(2).text(anim_total.toFixed(2) + ' $'); //  escrir le prix total de animaux dans la table

    // add le numbre de personnes au table

    cantt_personnes = parseInt($('#pers').val()); // recuperamos el valor de input #persona
    table.eq(2).find('td').eq(0).text(parseInt(cantt_personnes));
    console.log(' cantidad de personas TIPO ' ,typeof cantt_personnes); //OK NUMERO

    // total a payer pour personnes
    var val_Prix_pers = parseFloat(table.eq(2).find('td').eq(1).text());
    var pers_total = cantt_personnes * val_Prix_pers;
    table.eq(2).find('td').eq(2).text(pers_total.toFixed(2) + ' $');

    // r'eservation total
    var prix_total = anim_total + pers_total;
    table.eq(3).find('td').eq(2).text(prix_total.toFixed(2) + ' $');
}



///MODAL BOX

/**
 * Rechercher le container du modal box et s'il n'existe pas (1ere fois), le créer
 * Mettre à jour la propriété container de la variable mb_data
 */
function mb_create_container() {
    mb_data.container = $('.mb_container');
    if (mb_data.container.length == 0) { // Le container n'existe pas : il faut le créer
        mb_data.container =$('<div>')
                .addClass('mb_container').append('<p>' + forfait.nom + '')
                .appendTo('table');
        // Créer le div background dedans
        $('<div>')
            .addClass('mb_background')
            .appendTo(mb_data.container)
            .on('click', mb_close); // Gérer la fermeture sur click sur le background
        console.log('mb_container est créé');
    }
}



function mb_open(target, closingItems, css_options) {
    console.log('Ouverture de ', target); // Affichage élément cible
    if (mb_data.container === null) { // Création container si absent
        mb_create_container();
    }
    // Maintenant le container et son background sont créés
    // Si on a des options CSS pour le background, on les applique
    if ('undefined' !== typeof css_options) { // Le paramètre est défini à l'appel
        mb_data.container.find('.mb_background').css(css_options);
    }

    var clone = $(target)
        .clone() // Clonage
        .addClass('mb_item')
        .appendTo(mb_data.container) // Le placer à la fin du container
        .show()
        .parent() // Repasser au mb_container
        .fadeIn(); // Faire apparaitre
    // Géré les éléments responsables de la fermeture au click (en plus du background)
    // S'ils sont fournis
    // closingItems, s'il est fourni est un sélecteur
    if ('undefined' !== typeof closingItems) {
        clone
            .find(closingItems)
            .on('click', mb_close);
    }
}

/**
 * Fermer la modal_box
 */
function mb_close() {
    console.log('Fermeture modal_box');
    mb_data.container
        .fadeOut(1000, function () {
            $(this)
                .find('.mb_item')
                .remove(); // Detruire le clone (de classe 'mb_item')
        })
}






