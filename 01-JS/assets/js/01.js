// alert('WOW ! Tu es toujours avec moi ... !');

// pour faire un commentaire uniligne -> raccourci : Ctrl + ":""
/*
pour faire un commentaire multiligne -> raccourci : Alt + Shift + "A"
*/

// Déclaration vaeiable
var Prenom;

// Affectation d'une valeur à la variable déclarée
Prenom = "Ousmane";

// Affichage de la valeur de cette variable dans la console
console.log(Prenom);

                /*-------------------------------------------------- 
                | ~ ~ ~ ~ ~   LES TYPES DE VARIABLES   ~ ~ ~ ~ ~ ~ |
                ---------------------------------------------------*/

// Ici typeof suivi d'une variable, permet de connaitre le type de cette variable
console.log(typeof Prenom);

// Déclaration d'une variable et affection d'une valeur en nombre
var Age = 40;

// Affichage dans la console de la valeur de la valeur
console.log(Age);

// Affichage du type de la variable
console.log(typeof Age);

// Remarque Javascript est un langage auto-typé

                /*-------------------------------------------------- 
                | ~ ~ ~ ~ ~   LA PORTEE DES VARIABLES  ~ ~ ~ ~ ~ ~ |
                ---------------------------------------------------|

Les variables déclarées directement à la racine du fichier JS sont appelées variables GLOBALES.

Elles sont disponibles/accessibles dans l'ensemble de votre document, y compris dans les fonctions.

###

Les variables déclarées à l'intérieur d'une fonction sont appelées variables LOCALES.

Elles sont disponibles/accessibles uniquement dans le contexte de la fonction ou le bloc qui les contient

###

Depuis ECMA 6, vous pouvez déclarer une variable avec le mot clé "let".

Votre variable sera alors accessible uniquement dans le bloc par lequel elle est contenue

Exemple:
Si elle est déclarée dans une condition, elle sera uniquement disponible dans le bloc de la condition

*/

// -- Les variables FLOAT

var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens

var unBooleen= false; // ou "true"
console.log(unBooleen);
console.log(typeof unBooleen);

// -- Les Constantes

/* 
la déclaration CONST permet de créer une constante accessible uniquement en lecture. Sa valeur ne pourra pas être
modifiée par des réaffections ultérieures. Une constante ne peut pas être déclarée une deuxième fois (contrairement
à une variable)

Bonne pratique : par convention, les constantes sont en majuscule.

Depuis ECMA 6, on recommande l'utilisation des constantes à celle de var ou let si aucune modification de valeur n'est
à venir

*/

const HOST="localhost";
const USER="root";
const PASSWORD="mysql";

// je ne peux pas faire ce qui suit

// USER = "Hugo";
// erreur : Uncaught TypeError: Assignment to constant variable.

// ni
// const USER = "Hugo";
// erreur : Uncaught SyntaxError: Identifier 'USER' has already been declared

/* 
                                            Information
                                            -----------
Au fur et à mesure que l'on affecte ou réaffecte des valeurs à une variable, celle-ci prend la dernière valeur
et le dernier type

En Javascript (ECMA Script), les variables sont auto-typées.

Pour convertir une variable de type NUMBER en STRING et inversement, je peux utiliser les fonctions natives de
Javascript.
*/

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/* la fonction parseInt() pour retourner un nombre type string à partir d'une chaine de caractère type string */

unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);


// -- Je réaffecte une valeur à ma variable

var unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Conversion d'un nombre en string avec toString()

unNombre=10;
console.log(unNombre);
console.log(typeof unNombre);
var monNombreEnString=unNombre.toString();
console.log(monNombreEnString);
console.log(typeof monNombreEnString);