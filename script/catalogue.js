'use strict';
var catalogueTitle;
var showForfaits;
const IMG_PATH ="http://p86-tp-forfaits.projetisi.com/images/";
$(function () {
    console.log('DOM Construit');
    catalogueTitle = $('#accordion_cats');
    console.log(catalogueTitle);
    showForfaits = $('.one_cat_forfaits');
   requestTitle();
   requestForfaitCat();

});
// function qui fait appel a les categories de forfaits
function requestTitle() {
  console.log('Appel de la function pour afficher les titres');
  var titleContainer = catalogueTitle.children('h3');
  console.log(titleContainer);
  for(var i= 0; i < categories.length; i++ ){
      var categorie = categories[i];
      titleContainer.eq(i).text(categorie);
  }
}
//function qui affiche les forfaits qui sont dans la base de données
function  requestForfaitCat(){
    console.log('Appel de la function pour afficher les forfaits');
    var forfaitsContainer = showForfaits.find('.forfait_list');//--> le ul de class forfaits_list
    console.log(forfaitsContainer);
    for(var i = 0; i < forfaits_data.length; i++){
        var forfaits = forfaits_data[i];
        $('<li class="forfait">')
            .appendTo(forfaitsContainer.eq(forfaits.categorie))
            .append('<h4>' + forfaits.nom + '</h4>')
            .append('<img class="forfait_image" src="'+IMG_PATH+forfaits_data[i].photo1+'"/>')
            .append('<a class="forfait_name" href="reservation.html?forfid='+ i +'">Details Forfaits</a>');

    }
}

