/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

function demanderPrenom() {
    return prompt("SVP quel est votre prénom");
}

/**
 * Demande à l'utilisateur de saisir son age
 * @param {string} Prenom
 */
function demanderAge(Prenom) {
    return prompt("Bonjour " + Prenom + ", quel age as-tu ?");
}
function anneeNaissance(Age) {
    let DateduJour = new Date();
    return DateduJour.getFullYear() - Age;
}
function afficherAnneeNaissance(Age) {
    alert("Tu est donc né en " + anneeNaissance(Age));
}
function afficherRecap(Prenom, Age) {
    alert("bonjour " + Prenom + ", tu as " + Age + " ans");
}

let Prenom = demanderPrenom();
let Age = demanderAge(Prenom);
afficherAnneeNaissance(Age);
afficherRecap(Prenom, Age);

// -- 2. Création d'une fonction
function Hello() {

    // -- 2a. Je demande a l'utilisateur son prénom
    let prenom = prompt("Hello ! What is your name ?", "<Saisir votre Prénom>");
    console.log(prenom);
    console.log(typeof prenom);
    
    // -- 2b. Je lui demande son age
    let age = parseInt(prompt("Hello " + prenom + " ! How old are you ?", "<Saisir votre Age>"));
    console.log(age);
    console.log(typeof age);

    // -- 2c. Déduire l'année de naissance et l'afficher dans une alerte
    let anneeActuelle=new Date().getFullYear();
    alert('AMAZING ! So you were born in ' + ( anneeActuelle - age ) + " !" );

    // -- 2d. J'affiche un Récapitulatif
    document.write("Hello " + prenom + " it's AMAZING ! you're " + age + " !");
}

// -- 3. L'Execution de la Fonction
Hello();


