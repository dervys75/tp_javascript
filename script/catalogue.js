"use strict";
/*Declaration de Constants*/
const IMG_PATH ="http://p86-tp-forfaits.projetisi.com/images/";
var catalogueFilter;
var containerForfait;
$(function(){
	console.log('DOM Construit');
	catalogueFilter = $('.main_catalogue_container');
	containerForfait = $('.forfait_info');
	console.log(catalogueFilter);
	showCategories();
	ShowForfaits();
});
// Tous les titres de categorie des forfaits
function showCategories(){
	console.log("Affiche les forfaits");
	var titlesCat = catalogueFilter.children('h3.title_forfait');
	console.log(titlesCat);
	for(var i = 0; i < categories.length ; i++){
		var typeCat = categories[i];
		titlesCat.eq(i).text(typeCat);
	}
}

function ShowForfaits() {
	console.log("Afficher foratis",forfaits_data.length);
	var theForfait = containerForfait.children('h4');
// 	var image_forfait =containerForfait.find("table.wrapper_forfait tr.forfait_image");
	console.log(theForfait);
	for( var i = 0; i < forfaits_data.length ; i++){
		var forfaits = forfaits_data[i];
		theForfait.eq(forfaits.categorie).text(forfaits.nom);
 		/*image_forfait.eq(forfaits.categorie).append('<td><img src="'+IMG_PATH+forfaits_data[i].img_catalogue+ '" alt="'+ forfaits.nom+'"></td>');
*/
	}
}
