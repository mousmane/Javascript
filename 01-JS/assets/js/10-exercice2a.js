function l(e) {
    console.log(e);
}

function w(e) {
    document.write(e);
}

var membres = [
    { 'pseudo': 'Hugo', 'age': 26, 'email': 'wf3@hl-media.fr', 'mdp': 'wf3' },
    { 'pseudo': 'Rodrigue', 'age': 56, 'email': 'rodrigue@hl-media.fr', 'mdp': 'roro' },
    { 'pseudo': 'James', 'age': 78, 'email': 'james@hl-media.fr', 'mdp': 'james8862' },
    { 'pseudo': 'Emilio', 'age': 18, 'email': 'milio@hl-media.fr', 'mdp': 'milioDu62' }];

let membresLength = membres.length;



function chercherIndex(userPseudo) {
    let index = -1;
    for (let i = membresLength - 1; i > -1; --i) {
        if (membres[i].pseudo == userPseudo) { index = i; break }
    };

    return index;
}

function verifPseudo() {
    let userPseudo = document.getElementById("pseudo").value.trim();
    // l(userPseudo);
    if (userPseudo !== "" && chercherIndex(userPseudo) >= 0) {
        /* si on trouve une correspondance entre la saisie et un pseudo de la liste des membres */
        document.getElementsByClassName("pseudoError")[0].style.display = "block";
        document.getElementById("submit").disabled = 'disabled';
    } else {
        document.getElementsByClassName("pseudoError")[0].style.display = "none";
        document.getElementById("submit").disabled = '';

    }

}

function verifAge() {
    let userAge = parseInt(document.getElementById("age").value.trim());
    l(userAge);
    if (Number.isFinite(userAge)){
        if (userAge < 18) {
            document.getElementsByClassName("ageError")[0].style.display = "block";
            document.getElementById("submit").disabled = 'disabled';
        } else {
            document.getElementsByClassName("ageError")[0].style.display = "none";
            document.getElementById("submit").disabled = '';
        }
    }else{

    }
}

function changerTitre(){
    
}