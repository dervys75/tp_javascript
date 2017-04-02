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
    var width = 1150;
    var animationSpeed = 1000;
    var pause = 3000;
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
});