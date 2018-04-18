// Déclaration tableau numérique indexé numériquement

var Prenoms = ["Salim", "Greg", "Rachma", "Freddy", "Cheffia"];

// Apercu dans la console
console.log(Prenoms);

// Nombre d'éléments dans un tableau
var NbElementsDsTableau = Prenoms.length;
console.log(NbElementsDsTableau);

// Récupération valeur dans tableau indexé par utilisation d'index
console.log(Prenoms[2]); // -> Rachma
console.log(Prenoms[0]); // -> Salim
console.log(Prenoms[4]); // -> Cheffia
console.log("---");

// --
var i = 3;
console.log(Prenoms[i]);
console.log("---");

// -- Pour i=0 (au départ i vaut 0); tant que i est inférieur à NbElementsDsTableau (Prenoms.length ; alors i++ (incrémentation par pas de 1)

for (let i = 0; i < NbElementsDsTableau; i++) {
    console.log("Ici, i = " + i);
    console.log(Prenoms[i]);
    console.log("---");
}

// -- tableau avec objets

var Contact = {
    prenom: "Hugo",
    nom: "LIEGEARD",
    telephone: "0783 97 15 15"
}

console.log(Contact['prenom'] + " " + Contact['nom'] + " " + Contact['telephone']);
console.log(Contact.prenom + " " + Contact.nom + " " + Contact.telephone);

console.log("---");

// -- Supposons que je souhaite avoir un tableau de contacts...
var ContactsAsArray = [
    [
        'Hugo',
        'LIEGEARD',
        [
            '0783 97 15 15',
            'wf3@hl-media.fr',
            [
                'Campus EDF',
                '17 Rue Albert Thomas',
                '78130',
                'Les Mureaux'
            ]
        ]
    ],
    [
        'Salim',
        'SOUMARE',
        [
            '0645 78 43 12',
            'salim@hl-media.fr',
            [
                'Campus EDF',
                '17 Rue Albert Thomas',
                '78130',
                'Les Mureaux'
            ]
        ]
    ],
]

console.log(ContactsAsArray)
console.log("---");

// -- Ce n'est vraiment pas pratique pour manipuler les données... On va plutôt privilégier les Objets.

var Contacts = [
    "Hugo",
    "Greg",
    {
        // INDICE    VALEUR 
        prenom: "Hugo",
        nom: "LIEGEARD",
        tel: {
            fixe: "0596 108 328",
            port: "0783 97 15 15"
        }
    },
    {
        //  INDICE    VALEUR 
        prenom: "Salim",
        nom: "SOUMARE",
        tel: {
            fixe: "01 45 78 89 56",
            port: "06 78 96 54 35"
        }
    }
];

// -- Aperçu dans la console de mon tableau de Contacts
console.log(Contacts);
console.log("---");

// -- Comment accéder aux valeurs de mon objet, dans un tableau indexé !

// -- 1. D'abord, je récupère l'objet
console.log(Contacts[3]);

// -- 2. Pour accéder aux valeurs de mon objet
console.log("Prénom = " + Contacts[3].prenom);
console.log("Nom = " + Contacts[3].nom);
console.log("Téléphone Fixe = " + Contacts[3].tel.fixe);
console.log("Téléphone Portable = " + Contacts[3].tel.port);
console.log("---");

// -- En résumé, j'accède à la valeur de l'indice "prenom" de l'objet située à l'index 3 de mon tableau "Contacts"

// -- Comment parcourir mon tableau avec des objets.
// -- Supposons le tableau suivant :
var Apprenants = [
    {
        nomcomplet: "Hugo LIEGEARD",
        classe: "Terminale S"
    },
    {
        nomcomplet: "Greg D'HAEM",
        classe: "CAP Cuisine"
    },
    {
        nomcomplet: "Glenn PETERSON",
        classe: "Master II Informatique"
    },
    {
        nomcomplet: "Rachma SALIM",
        classe: "Doctorat Scientifique"
    },
];

console.log(Apprenants);

// -- Si je veux connaitre le nombre d'apprenants ?
var NombreDeApprenants = Apprenants.length;

for (let i = 0; i < NombreDeApprenants; i++) {
    console.log("Ici, i = " + i);
    // console.log(Apprenants[i]);
    console.log(Apprenants[i].nomcomplet + ' : ' + Apprenants[i].classe);
    console.log("---");
}
