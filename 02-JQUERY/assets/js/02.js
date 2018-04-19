/*-----------------------------------------------
            LES SELECTEURS JQUERY
------------------------------------------------*/

// -- Format : $('selecteur')
// -- En JQuery, tous les sélecteurs CSS sont disponibles...

$(function(){
    l=e=>console.log(e);

    // -- sélectionner toutes les balises SPAN
    l(document.getElementsByTagName('span'));
    l($('span'));

    // -- sélectionner un élément par son ID
    l(document.getElementById('menu'));
    l($('#menu'));

    // -- sélectionner un élément par sa classe
    l(document.getElementsByClassName('MaClasse'));
    l($('.MaClasse'));

    // -- sélectionner par condition de valeur d'un attribut
    l($('[href="#"]'));

});