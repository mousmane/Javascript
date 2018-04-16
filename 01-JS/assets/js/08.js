/* --------------------------------------------------------
                    LES CONDITIONS
----------------------------------------------------------*/

var MajoriteLegaleFR = 18;
let age = 14;
if (age >= MajoriteLegaleFR) { alert("bienvenue !") }
else { alert("google ....") };

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */


function demanderAge() {
    return prompt("Bonjour quel age avez-vous ?","<saisir votre age>");
}

/**
 * Affiche un pop-up de bienvenu aux majeurs sinon effectue une redirection
 */
function verifierAgeLegal(){
    if  (demanderAge()>=MajoriteLegaleFR){
        alert("bienvenue ! étant majeur, vous êtes autorisés à accéder à ce site web !");
    }
    else{
        document.location.href="http://www.google.com"
    };
}

verifierAgeLegal();

// -- 1. Déclarer la Majorité Légale
var MajoriteLegaleFR = 18;

// -- 2. Créer une fonction pour vérifier son age.

/**
 * Retourne VRAI si majeur.
 * FAUX sinon.
 * @param {Number} age 
 */
function estMajeur(age) {
    if(age >= MajoriteLegaleFR) {
        return true;
    } else {
        return false;
    }
}

// -- 3. Je demande à l'utilisateur son age
var ageSaisieParMonUtilisateur = parseInt(prompt("Bonjour, Quel age avez-vous ?","<Saisissez votre Age>"));

// -- 4. Vérification de l'age du visiteur....
if( estMajeur(ageSaisieParMonUtilisateur) ) {

    // -- 4a. J'affiche un message de bienvenue
    alert('Bienvenue sur mon site internet réservé aux majeurs...');
    document.write("0_0 !!!");

} else {
    
    // -- 4b. J'effectue une redirection
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";

}



        /*---------------------------------------------------
                    LES OPERATEURS DE COMPARAISON
        ----------------------------------------------------*/

/* 
    L'opérateur de comparaison "==" signifie "égale à". Il permet de vérifier que les
    2 variable sont identiques.

    L'opérateur de comparaison "===" signifie "strictement égal à". Il va comparer la
    valeur mais aussi le type

    l'opérateur de comparaison "!=" signifie "différent de"

    l'opérateur de comparaison "!==" signifie "strictement différent de"
    
*/

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.
Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.
En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// // -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

document.write("<br>vérification de l'identité<br>");

var userEmail=prompt("Bonjour, Quel est votre email ?","<Saisissez votre email>");
var userMdp=prompt("Bonjour, Quel est votre mot de passe ?","<Saisissez votre mot de passe>");

function verifNotOk(){
    return (email != userEmail) || (mdp != userMdp);
}

if (verifNotOk())
{
    alert("Echec d'identification email/mot de passe!");
    document.write(":-( !!!");
    
}
else {
    alert('Bienvenue sur votre espace...');
    document.write("0_0 !!!");
}

    /* -------------------------------------------------------- *\
   /                 ~ LES OPERATEURS LOGIQUES ~                  \
  /_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ \
    |                                                           |
    |           ##### L'opérateur ET : && ou AND #####          |
    |                                                           |
    |   Si la combinaison email user et email correspond, ET    |
    |   la combinaise mdpuser et mdp correspond.                |
    |                                                           |
    |   --> Dans cette condition, les 2 doivent OBLIGATOIREMENT |
    |   correspondre pour être validée.                        |
    |   Ex. if(emailUser == email && mdpUser == mdp) {...}      |
    |                                                           |
    |           ##### L'opérateur OU : || ou OR #####           |
    |                                                           |
    |   Si la combinaison emailUser et email correspond ET/OU   |
    |   la combinaison mdpUser et mdp correspond.
    |                                                           |
    |   --> Dans cette condition, au moins l'une des deux       |
    |   doit correspondre pour être validée.                    |
    |   Ex. if(emailUser == email || mdpUser == mdp) {...}      |
    |                                                           |
    |        ##### L'opérateur " ! " ou encore NOT #####        |
    |                                                           |
    |   L'Opérateur "!" signifique le CONTRAIRE DE... ou NOT    |
    |                                                           |
    |   var monUtilisateurEstApprouve = true;                   |
    |   if(!monUtilisateurEstAppprouve) {...}                   |
    |   Mon Utilisateur n'est pas approuvé.                     |
    |                                                           |
    |   Reviens à écrire :                                      |
    |   if(monUtilisateurEstApprouve == false) {...}            |
    |                                                           |
    \*---------------------------------------------------------*/