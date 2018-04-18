/* --
    CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification. Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    { 'prenom': 'Hugo', 'nom': 'LIEGEARD', 'email': 'wf3@hl-media.fr', 'mdp': 'wf3' },
    { 'prenom': 'Rodrigue', 'nom': 'NOUEL', 'email': 'rodrigue@hl-media.fr', 'mdp': 'wf3' },
    { 'prenom': 'Nathanael', 'nom': 'DORDONNE', 'email': 'nathanael.d@hl-media.fr', 'mdp': 'wf3' }
];


let BDDl = BaseDeDonnees.length;
var email, mdp;

document.write("<br>vérification de l'identité...<br>");

var userEmail = prompt("Bonjour, Quel est votre email ?", "<Saisissez votre email>");
var userMdp = prompt("Bonjour, Quel est votre mot de passe ?", "<Saisissez votre mot de passe>");
let nbToursBoucle = 0;

function chercherIndex() {
    let index = -1;
    for (let i = BDDl - 1; i > -1; --i) {
        nbToursBoucle++;
        
        if ((BaseDeDonnees[i].email === userEmail) && (BaseDeDonnees[i].mdp === userMdp)) {
            index = i;
            break;
        };
        
    }
    console.log("Nb tours de boucle :" + nbToursBoucle);

    return index;
}

var index = chercherIndex();

if (index < 0) {
    alert("Echec d'identification email/mot de passe!");
    document.write(":-( !!!");

}
else {
    alert('identification réussie');
    document.write("Bienvenue sur votre espace " + BaseDeDonnees[index].prenom + " " + BaseDeDonnees[index].nom);
}