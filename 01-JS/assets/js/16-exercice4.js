function l(e) {
    console.log("'" + e + "'");
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
        document.getElementById("Bienvenue").innerHTML = "Bonjour";
    } else {
        // on ne trouve pas de correspondance
        document.getElementsByClassName("pseudoError")[0].style.display = "none";
        document.getElementById("submit").disabled = '';
        document.getElementById("Bienvenue").innerHTML = "Bonjour " + userPseudo;
    }

}

function verifAge() {
    let userEnteredAge = document.getElementById("age").value.trim();
    // l(userEnteredAge);
    if (userEnteredAge !== "") {
        // bloc qd saisie non vide après suppression espaces avant après

        let userAge = Number(userEnteredAge);
        // l(userAge);
        if (isNaN(userAge)) {
            //si saisie n'est pas un nombre
            document.getElementsByClassName("ageNaNError")[0].style.display = "block";
            document.getElementsByClassName("ageError")[0].style.display = "none";

        } else {
            // bloc qd saisie est un nombre

            document.getElementsByClassName("ageError")[0].style.display = "none";
            document.getElementsByClassName("ageNaNError")[0].style.display = "none";

            // controle sur la majorite
            if (userAge < 18) {
                document.getElementsByClassName("ageError")[0].style.display = "block";
                document.getElementById("submit").disabled = 'disabled';
            } else {
                document.getElementsByClassName("ageError")[0].style.display = "none";
                document.getElementById("submit").disabled = '';
            }
        }
    } else {
        // bloc qd saisie vide après suppression espaces avant après
        document.getElementsByClassName("ageError")[0].style.display = "none";
        document.getElementsByClassName("ageNaNError")[0].style.display = "none";

    }


}

function verifEmail() {
    let userEnteredEmail = document.getElementById("email").value.trim();
    l(userEnteredEmail);
    userEnteredEmail = document.forms['adhesion'].elements['email'].value.trim();
    l(userEnteredEmail);

    var reg = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;

    document.getElementsByClassName("emailError")[0].style.display = "none"

    if (userEnteredEmail != "") {
        if (!reg.test(userEnteredEmail)) {
            document.getElementsByClassName("emailError")[0].style.display = "block";
        } else l("test of email again regexp successful!");
    }
}

function changerTitre() {
    let userPseudo = document.getElementById("pseudo").value.trim();
    if (userPseudo.length > 0)
        document.getElementById("Bienvenue").innerHTML = "Bonjour" + " " + userPseudo;
    else document.getElementById("Bienvenue").innerHTML = "";
}

function ajouterMembre() {
    let userPseudo = document.getElementById("pseudo").value.trim();
    let userAge = document.getElementById("age").value;
    let userEmail = document.getElementById("email").value;
    let userMdp = document.getElementById("mdp").value;
    membres.push({
        pseudo: userPseudo,
        age: userAge,
        email: userEmail,
        mdp: userMdp
    })

    document.body.innerHTML += "<br><br>Merci " + userPseudo + " ! Tu es maintenant inscrit.<br>";
}

function afficherMembres() {
    document.body.innerHTML += "<br><br>Voici la liste de nos Membres :</p><ol>";
    membres.forEach(element => {
        document.body.innerHTML += "<li>" + element.pseudo + " " + element.age + " ans</li>";
    });
    document.body.innerHTML += "</ol>";
}

function ajouterEcouteursEvenements() {
    l("dans ajouterEcouteursEvenements()...");

    document.getElementById("pseudo").addEventListener('input',
        function () {
            verifPseudo();
            changerTitre();
        }
    );
    document.getElementById("age").addEventListener('change', verifAge);
    document.getElementById("email").addEventListener('change', verifEmail);
    // document.getElementById("submit").addEventListener('click',
    //     function (e) {
    //         e.preventDefault();

    //         ajouterMembre();
    //         afficherMembres();
    //     }
    // );
    document.getElementById("adhesion").addEventListener('submit',
        function (event) {
            l("dans submit");
            // Stop de la redirection
            event.preventDefault();
            ajouterMembre();
            afficherMembres();
        });

}

window.addEventListener("load", function () {
    ajouterEcouteursEvenements();
    l("dans addEventListener()");
});