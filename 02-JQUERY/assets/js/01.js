/*----------------------------------------------
            LA DISPONIBILITE DU DOM
------------------------------------------------*/

/**
 * A partir du moment ou le DOM, i.e. l'ensemble de l'arborescence de
 * ma page HTML est complètement chargé, on peut commencer à utiliser JQuery
 * 
 * On va mettre l'ensemble du code dans une fontion qui sera appelée
 * automatiquement (!) par JQuery lorsque le DOM sera entièrement défini.
 * 
 * --->    3 façons de procéder
  
 */

// 1er possibilité :

jQuery(document).ready(function () {
    // Ici, le DOM est entièrement chargé

});

// 2e possibilité :

$(document).ready(function () {
    // Ici, le DOM est entièrement chargé

})

// 3e possibilité :

$(function(){
    // Ici, le DOM est entièrement chargé

})

// 4e possibilité :
$(()=>{
    // Ici, le DOM est entièrement chargé
    
    alert("Bienvenue dans ce cour JQuery !");

    // en JS
    document.getElementById('TexteEnJQuery').innerHTML=("<strong>Mon texte en JS</strong>");

    // en JQ:
    // en JQuery, les sélecteurs sont les mêmes qu'en CSS
    $('#TexteEnJQuery').html("Mon texte en JQ");
})