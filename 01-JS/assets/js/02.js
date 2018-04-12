// -- Déclaration d'un tableau indexé

// les 2 déclarations suivantes sont possibles
var monTableau = [];
var myArray = new Array;

monTableau[0] = "Rahma";
monTableau[1] = "Freddy";
monTableau[2] = "Ousmane";

// -- affichage de toutes les données
console.log(monTableau);

// -- affichage du 2ème élément du tableau
console.log(monTableau[1]);

var NosPrenoms = ['Salim', 'Greg', 'Cheffia', 'Glenn', 'julien'];
console.log(NosPrenoms);

// PAS DE TABLEAU ASSOCIATIF EN JAVASCRIPT

var Coordonnee = {
    prenom: "Ousmane", nom: "MAMA", age: 78
}
// console.clear();
console.log(Coordonnee);
console.log(Coordonnee['prenom']);
console.log(Coordonnee.prenom);
console.log(Coordonnee.nom);


//  -- Je vais créer 2 tableaux indexés
var listeDePrenoms = ["Ousmane", "Cheffia", "Hugo", "Salim"];
var listeDeNoms = ["MAMA", "BENALLAL", "LIEGEARD"];

// -- je vais créer un tableau à 2 dimensions, à partir de tableaux existants
var Annuaire = [listeDePrenoms, listeDeNoms];

console.log(Annuaire);
document.write(Annuaire[0][1]);
document.write(' ');
document.write(Annuaire[1][1]);

/* -------------------------------------------------\
|                    EXERCICE :-)                   |   
|   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   |
|   Créez un Tableau à 2 dimensions appelé          |
|   "AnnuaireDesStagiaires" qui contiendra          |
|   toutes les coordoonnées pour chaque stagiaire.  |
|                                                   |
|   Ex. Nom, Prénom, Tel                            |
\------------------------------------------------- */


var listeDeTelephones = ["06", "07", "08"];

var AnnuaireDesStagiaires = [listeDeNoms, listeDePrenoms, listeDeTelephones];
console.log(AnnuaireDesStagiaires);
document.write("<br><br>Nom | Prénom | Téléphone<br><br>");
document.write(AnnuaireDesStagiaires[0][0] + '|' + AnnuaireDesStagiaires[1][0] + '|' + AnnuaireDesStagiaires[2][0] + '<br><br>');
document.write(AnnuaireDesStagiaires[0][1] + '|' + AnnuaireDesStagiaires[1][1] + '|' + AnnuaireDesStagiaires[2][1] + '<br><br>');
document.write(AnnuaireDesStagiaires[0][2] + '|' + AnnuaireDesStagiaires[1][2] + '|' + AnnuaireDesStagiaires[2][2] + '<br><br>');

var AnnuaireDesStagiaires2 = [
    { prenom: "Hugo", nom: "LIEGEARD", tel: "0783 97 15 15" },
    { prenom: "Salim", nom: "SOUMARE", tel: "XXXX XX XX XX" },
    { prenom: "Pransun", nom: "BALASUBRAMANIAM", tel: "XXXX XX XX XX" },
];

console.log(AnnuaireDesStagiaires2);

// -- Exemple 3D

var Contacts = [

    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        coordonnees: {
            email: "wf3@hl-media.fr",
            tel: {
                fixe: "0596 108 328",
                fax: "0596 108 632",
                port: {
                    prive: "07 83 97 10 15",
                    pro: "07 83 97 15 15"
                }
            },
            adresse: {
                ville: "Ducos",
                cp: "97224",
                region: "Martinique",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            }

        }
    },

    {
        prenom: "Rodrigue",
        nom: "NOUEL",
        coordonnees: {
            email: "rodrigue.nouel@hl-media.fr",
            tel: {
                fixe: "0596 56 78 89",
                fax: "0596 32 15 22",
                port: {
                    prive: "0696 78 89 56",
                    pro: "0696 89 23 45"
                }
            },
            adresse: {
                ville: "Fort-de-France",
                cp: "97200",
                region: "Martinique",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            }

        }
    },

    {
        prenom: "Gregory",
        nom: "D'HAEM",
        coordonnees: {
            email: "greg.dhaem@hl-media.fr",
            tel: {
                fixe: "0675 89 78 45",
                fax: "",
                port: {
                    prive: "0620 86 78 45",
                    pro: ""
                }
            },
            adresse: {
                ville: "les Mesnuls",
                cp: "78490",
                region: "Ile de France",
                pays: {
                    code: "FR",
                    nom: "France"
                }
            }

        }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.email);
console.log(Contacts[1].coordonnees.email);
console.log(Contacts[2].coordonnees.email);

console.log(Contacts[2].prenom + ' habite en ' + Contacts[2].coordonnees.adresse.pays.nom + ' et son numéro de portable pro est le ' + Contacts[2].coordonnees.tel.port.prive);

            /* ------------------------
                AJOUTER UN ELEMENT
            ---------------------------*/

var  Couleurs=['Rouge',"Jaune","Vert"];

/* 
Si je souhaite ajouter un élément dans mon tableau. Je fais appel à la fonction push()
qui me renvoie le nombre d'éléments
*/

console.clear();
console.log(Couleurs);
var nbElementsDeMonTableau=Couleurs.push('Orange');
console.log(Couleurs);
console.log(nbElementsDeMonTableau);

/* 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/unshift
La fonction unshift permet d'ajouter un ou plusieurs éléments au début d'un tableau et d'en
récupérer la valeur. On peut accessoirement récupérer cette valeur dans une variable
*/

            /* ------------------------
                RECUPER UN ELEMENT
            ---------------------------*/

/* 
la fonction pop() permet de supprimer un ou plusieurs éléments de mon tableau et d'en récupérer
la valeur. Je peux accessoirement récupérer cette valeur dans une variable
*/

var monDernierElement=  Couleurs.pop();
console.log(Couleurs);
console.log(monDernierElement);


/* 
la même chose est possible avec le premier élément en utilisant la fonction shift()

NB : la fonction splice() vous permet de sortir un ou plusieurs éléments d'un tableau
*/