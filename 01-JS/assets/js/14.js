/* ----------------------------------------------
            LA MANIPULATION DES CONTENUS
------------------------------------------------*/

function l(e){
    console.log(e);
}

l = e => console.log(e);

// récupérer le lien google
var google=document.getElementById('google');
l(google);

/**
 *  accès aux informations de ce lien
*/

//adresse vers laquelle pointe
l(google.href);
//id
l(google.id);
//class
l(google.className);
//texte de la balise
l(google.textContent);

/**
 *  Modification du contenu de mon lien
 *  Comme avec une variable classique, affection d'une nouvelle
 *  valeur à "textContent"
 */

 google.textContent="Mon lien vers Gooooooooogle !";

/*-------------------------------------------
        AJOUTER UN ELEMENT DANS MA PAGE
 ------------------------------------------*/

 /*

 En 2 Etapes : 

 1. Utilisation de la fonction document.createElement() qui va permettre 
 de générer un nouvel élément dans le DOM; que je pourrais modifier par 
 la suite avec les méthodes vues précédemment

 NB: Les nouveaux éléments créés sont placés en mémoire

 */

// définition de l'élément
var span = document.createElement('span');

// affection d'un ID
span.id= "MonSpan";

//attribution d'un contenu
span.textContent="Mon beau texte en JS";

// Ajout de l'élémént dans la page en tant qu'enfant du lien Google
google.appendChild(span);


/* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".
Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

// création de la balise h1
var h1=document.createElement('h1');
// création de la balise a
var a=document.createElement('a');
// définition d'une destination de lien
a.href="http://sport24.lefigaro.fr/basket/nba/actualites/portland-prend-l-eau-toronto-et-boston-font-le-break-905559";
// titre de l'article
a.textContent="Titre de mon Article";
// couleur du texte
a.style.color="red";
// lien non souligné
a.style.textDecoration="none";
// ouverture dans nouvel onglet
a.target="_blank"

h1.appendChild(a);
document.body.appendChild(h1);