"use strict";
/*Declaration de Constants*/
const IMG_PATH ="http://p86-tp-forfaits.projetisi.com/images/";
var catalogueFilter;
$(function(){
	console.log('DOM Construit');
	catalogueFilter = $('.main_catalogue_container');
	console.log(catalogueFilter);
	showCategories();
// 	ShowForfaits();
});

function showCategories(){
	console.log("Affiche les forfaits");
	var titlesCat = catalogueFilter.children('h3.title_forfait');
	console.log(titlesCat);
	for(var i = 0; i < categories.length ; i++){
		var typeCat = categories[i];
		titlesCat.eq(i).text(typeCat);
	}
}
