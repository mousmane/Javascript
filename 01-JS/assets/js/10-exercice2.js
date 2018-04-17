/*

    I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous aurons donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

    II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 

*/

var Etudiants = [
    {
        prenom: "Hugo", nom: "LIEGEARD",
        moyennes: {
            "francais": "4",
            "math": "6",
            "physique": "18",
            // "generale": "9.33"
        }
    },

    {
        prenom: "Maxime", nom: "JOYES",
        moyennes: {
            "francais": "4",
            "math": "5",
            "physique": "12",
            "svt": "15",
            // "generale": "9.00"
        }
    },
    {
        prenom: "John", nom: "GARCIA",
        moyennes: {
            "francais": "4",
            "math": "13",
            "espagnol": "11",
            "svt": "15",
            // "generale": "9.00"
        }
    },
    {
        prenom: "Henri", nom: "TAPIS",
        moyennes: {
            "francais": "4",
            "math": "13",
            "portugais": "11",
            // "generale": "9.00"
        }
    },
    {
        prenom: "Johnny", nom: "CLEGG",
        moyennes: {
            "francais": "4",
            "math": "13",
            "zulu": "20",
            // "generale": "9.00"
        }
    }

];


document.write("<ol>");
for (let etu of Etudiants) {
    document.write("<li><p>Etudiant " + etu.nom + " " + etu.prenom + "</p><ul>");
    let moyennesParMatiere = etu.moyennes;
    let generale=0;
    for (let matiere in moyennesParMatiere) {

        document.write("<li>" + matiere + " : " + moyennesParMatiere[matiere] + "</li>");
        generale+=parseFloat(moyennesParMatiere[matiere]);
    }
    generale/=Object.keys(moyennesParMatiere).length;
    generale=generale.toFixed(2);
    document.write("<li><strong>Générale" + " : " + generale + "</strong></li>");
    
    document.write("</ul></li>");

}
document.write("</ol>");

document.write("<hr>");

