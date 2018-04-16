/* -----------------------------------------------------
                    LA CONCATENATION
------------------------------------------------------- */

/*
Aujourd'hui 16/04/2018, sont présents 12 apprenants.
*/

var DebutDePhrase = "Aujourd'hui ";
var DateduJour = new Date();
var SuiteDePhrase = ", sont présents : ";
var NbApprenants = 12;
var FinDePhrase = " apprenants.<br>";

/*
Nous souhaitons maintenant grâce à la concaténation, afficher tout ce petit monde en un seul morceau
*/

document.write(DebutDePhrase + DateduJour.getDate() + "/" + (DateduJour.getMonth() + 1) + "/" + DateduJour.getFullYear() + SuiteDePhrase + NbApprenants + FinDePhrase);

/* ----------------------------------------------------------
 EXERCICE :
 Créez une concaténation à partir des éléments suivants :  
---------------------------------------------------------- */

var phrase1 = "Je m'appelle ";
var phrase2 = "O.M. et j'ai ";
var age = 41;
var phrase3 = " ans !";

document.write(phrase1 + phrase2 + age + phrase3);
