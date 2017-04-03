'use strict';
// function color(elEvento){
//     console.log('Change couleur menu');
//    var evento = elEvento || window.event;
//    var tipo = evento.type;
//     if (tipo == "click") {
//         this.style.color = "whit";
//     }
//     else if (tipo == "dblclick") {
//         this.style.color = "olive";
//     }
// }
// window.onload = function() {
//     document.getElementsByClassName("colores").onclick = color;
//     document.getElementsByClassName("colores").ondblclick = color;
// };




const IMG_PATH ="http://p86-tp-forfaits.projetisi.com/images/";
// function charger_categories() {
//     console.log('Executer charger_Categories');
//     var categ_Forfaits = document.getElementById('list_categorie');
//     categ_Forfaits.innerHTML = ""; // vider le ul
//     // parcurrir les categories
//     for (var i = 0; i < categories.length; i++) {
//         categ_Forfaits.innerHTML += "<option>" + categories[i] + "</option>";
//     }

// }
// charger_categories();

$(function() {

    //settings for slider
    var width = 1200;
    var animationSpeed = 1000;
    var pause = 2000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

  startSlider();
    // Forfait en promotion 
    // console.log(forfaits_data[1].nom);
    //les forfaits en promotion
    $('<ul class="the_promo">').appendTo('.promo_forfaits');
        $(".the_promo").append('<li><img src="'+IMG_PATH+forfaits_data[1].photo1+'"/>')
        $(".the_promo li").append('<h3>'+forfaits_data[1].nom+'</h3>')
            .append('<p>'+forfaits_data[1].debut_saison+'</p>')
            .append('<p>$ '+forfaits_data[1].prix+'</p>');
        $('<li>').appendTo('.the_promo');
        $('.the_promo li').eq(1).append('<img src="'+IMG_PATH+forfaits_data[2].photo1+'"/>')
            .append('<h3>'+forfaits_data[1].nom+'</h3>')
            .append('<p>'+forfaits_data[1].debut_saison+'</p>')
            .append('<p>$ '+forfaits_data[1].prix+'</p>');
    $('<li>').appendTo('.the_promo');
    $('.the_promo li').eq(2).append('<img src="'+IMG_PATH+forfaits_data[3].photo1+'"/>')
        .append('<h3>'+forfaits_data[3].nom+'</h3>')
        .append('<p>'+forfaits_data[3].debut_saison+'</p>')
        .append('<p>$ '+forfaits_data[3].prix+'</p>');
});
