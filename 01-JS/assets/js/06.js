/*-------------------------------------------
                LES FONCTIONS
-------------------------------------------*/

/*

Déclarer une fonction

NB: cette fonction ne retourne aucune valeur et ne prend pas de paramètres.

*/

function Bonjour() {
    alert('Bonjour !');
}

// Exécution de la fonction Bonjour()
Bonjour();

/**
Déclaration de fonction qui prend des variables en paramètres
@param {string} Prenom
@param {string} Nom
*/

function disBonjour(Prenom, Nom) {
    document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong> !</p>");
}
/*
Appel et exécution de la fonction avec passage de valeurs à ses paramètres
*/

disBonjour("Ousmane", "M");

/* ---------------------
  EXERCICE :
  Créez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre.
---------------------- */

function add(a, b) {
    return a + b;
}

var a = 15, b = 35;

console.log("Résultat de l'addition de " + a + " et " + b + " = " + add(a, b));