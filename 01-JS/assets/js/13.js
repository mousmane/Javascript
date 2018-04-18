/*-----------------------------------------------
                        LE DOM
------------------------------------------------*/
/* 
Le DOM est une interface de développement en JS pour HTML.
Grâce au DOM, je vais être en mesure d'accéder ou modifier mon HTML

L'objet "document" est le point d'entrée vers mon contenu HTML.

Chaque page chargée dans mon navigateur a un objet "document"
*/

/**
 *                        QUESTION
 * Comment puis-je faire pour récupérer les différentes informations de
 * ma page HTML ?
 */

/* -----------------------------
    document.getElementById
--------------------------------

La fonction document.getElementById() va permettre de récupérer un élement
HTML unique à partir de son identifiant
*/

var bonjour = document.getElementById('bonjour');
console.log(bonjour);

/* ----------------------------------
    document.getElementsByClassName
-------------------------------------

La fonction document.getElementsByClassName() va permettre de récupérer un
ou plusieurs éléments HTML, résultat sous forme de liste, à partir de leur
nom de classe 
*/

var contenu = document.getElementsByClassName('contenu');
console.log(contenu);
// Renvoie un tableau JS avec éléments HTML (HTML Collection)

/* ----------------------------------
   document.getElementsByTagName
-------------------------------------

La fonction document.getElementsByTagName() va permettre de récupérer un
ou plusieurs éléments HTML, résultat sous forme de liste, à partir de leur
nom de balise
*/

var span =document.getElementsByTagName('span');
console.log(span);