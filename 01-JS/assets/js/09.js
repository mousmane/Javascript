            /*--------------------------------------------
                            LES BOUCLES
            ----------------------------------------------*/

// -- La boucle FOR

/**
 * Pour i=0 tant que (=";") i <= 10 alors (=";") alors j'exécute le corps de la boucle
 * et j'incrémente i par pas de 1
 */

for(let i=0;i<=10;i++){
    document.write("<p>Instruction exécutée : <strong>"+i+"</strong></p>");
}

document.write("<hr>");

// -- La boucle WHILE

/**
 * Tant que j <= 10 alors j'exécute le corps de la boucle
 * je dois veiller à coder l'incrémentation j (par pas de 1)
 * 
 */

var j=0;
while(j<=10){
    document.write("<p>Instruction exécutée : <strong>"+j+"</strong></p>");
    // Attention à ne pas oublier l'incrémentation
    j++;
}

document.write("<hr>");

/* -----------------------------
            EXERCICE
------------------------------ */

// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/**
 * CONSIGNE : Grâce à une boucle FOR, affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */

 for(let i=0;i<Prenoms.length;i++){
     document.write("<p>"+Prenoms[i]+"</p>");
 }

 document.write("<hr>");


 // boucle foreach

 Prenoms.forEach(affiche);

 function affiche(valeur, i){
    document.write("<p>"+i+" "+valeur+"</p>");
}

for(prenom of Prenoms){
    console.log(apotre);
}

 /**
  * Pour découvrir toutes les autres possibilités
  * de boucle : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration
  */

  /* 
  https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration
https://www.incredible-web.com/blog/performance-of-for-loops-with-javascript/
  */