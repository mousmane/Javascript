/*-----------------------------------------------------
                LES EVENEMENTS
------------------------------------------------------*/

/* 
Utilité des évènements : permettre de déclencher un programe, une série
d'instruction suite à une action de mon utilisateur...

OBJECTIF : Etre en mesure de capturer ces évènements afin d'éxécuter une
fonction

Les Evenements : Souris / Mouse
    - click : clic sur un élément
    - mouseenter : curseur souris passe au dessus de la zone d'un élément
    - mouseleave : curseur de la souris sort d'une zone d'un élément

Les Evenements : Clavier / Keyboard
    - keydown : touche de clavier enfoncé
    - keyup : touche clavier relachée

Les Evenements : Fenêtre / Windows
    - scroll : défilement de la fenêtre
    - resize : redimmensionnement de fenêtre

Les Evenements : Formulaire / Form
    - change :  modification d'éléments de type input/select/textarea
    - submit : soumission du formulaire
    - input : saisie utilisateur champ input


################# ECOUTEURS D'EVENEMENTS #####################

Attachement d'un événement à un élément, ou déclarer un écouteur
d'évènement qui se chargera de déclencher une fonction :

 */

 var p=document.getElementById('MonParagraphe');

 function changerCouleurRouge(){
     p.style.color="red";
 }
 p.addEventListener('click',changerCouleurRouge);


 /* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/

var input=document.createElement('input');
input.id="myInput";
input.type="text";
input.placeholder="saisir du texte..";
// input.placeholder.style.color="lightgrey";


function afficherSaisie(){
    alert("Vous avez saisi : "+input.value);
}

input.addEventListener('change',afficherSaisie);
document.body.appendChild(input);