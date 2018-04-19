/*-------------------------------------------
            LA GESTION DU TEMPS
------------------------------------------*/

function Hello() {
    alert('Hello my friend ! What a beautiful weather today !');
}

/**
 * La fonction "setTimeout" permet de spécifier une fonction
 * à exécuter au bout d'une durée définie

 * 1er param : la fonction à exécuter
 * 2e param : la durée en millisecondes
 */

setTimeout(Hello, 3000);

/**
 * La fonction "setInterval" permet d'exécuter en boucle une fonction
 * à exécuter au bout d'une durée définie

 * 1er param : la fonction à exécuter
 * 2e param : la durée en millisecondes
 */

setInterval(Hello, 3000);