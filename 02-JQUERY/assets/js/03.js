/*------------------------------------------
    LE CHAINAGE DE METHODE AVEC JQUERY
-------------------------------------------*/

$(function () {

    console.log($('div'));

    // -- Je souhaite cacher toutes les div de ma page HTML

    $('div').hide('slow', function () {

        /**
         * Une fois que la fonction hide() est terminée,
         * mon alerte peut s'exécuter
         * 
         * NOTA BENE: fonction s'exécutera pour l'ensemble
         * des éléments du sélecteur
         * 
         */

        // alert('fin du Hide');

        // $('div').css('background','yellow');
        // $('div').css('color','red');
        // $('div').show('slow');
        
        $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);
        
        $('p').hide(1000).css({'color':'blue','font-size':'20px'}).delay(2000).show(500);

    }); // fin du hide()

})