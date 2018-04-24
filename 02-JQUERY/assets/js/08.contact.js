function l(e) { console.log(e) };
var CollectionDeContacts;

// Storage.prototype.setObj = function(key, obj) {
//     return this.setItem(key, JSON.stringify(obj))
// }
// Storage.prototype.getObj = function(key) {
//     return JSON.parse(this.getItem(key))
// }

// -- Initialisation de jQuery (DOM READY)
$(function () {

    // -- Tableau indexé d'objet Contact
    // CollectionDeContacts = Storage.getObj('contactscoll');
    CollectionDeContacts = [];
    l(CollectionDeContacts);
    

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    /**
     * Après vérification des informations, permet
     * d'ajouter un Contact dans notre "CollectionDeContacts",
     * réinitialiser le formulaire et déclencher une notification.
     * @param {*} Contact 
     */
    function ajouterContact(Contact) {

        // -- Ajouter "Contact" dans "CollectionDeContacts"
        CollectionDeContacts.push(Contact);
        // sessionStorage.setItem('Contacts',CollectionDeContacts.concat([Contact]));

        // -- On cache la phrase : Aucun Contact.
        $('.aucuncontact').hide();

        // -- Mise à jour du HTML
        if (CollectionDeContacts.length > 0) {

            $('<tr><td>' + Contact.nom + '</td><td>' + Contact.prenom + '</td><td>' + Contact.email + '</td><td>' + Contact.tel + '</td></tr>').appendTo("#LesContacts tbody");

        } else $('.aucuncontact').show();

        // -- Réinitialisation du Formulaire
        
        $('#contact').trigger('reset');
        // $('#contact').get(0).reset();

        // -- Affiche une Notification
        $(".alert-contact").fadeIn().delay(5000).fadeOut();

        // Storage.setObj('contactscoll',CollectionDeContacts.concat([Contact]));
    }

    /**
     * Réinitialise les champs du Formulaire
     * reset() du Formulaire.
     */
    function reinitialisationDuFormulaire() {
        $('#contact .has-error').removeClass('has-error');
        $('#contact .help-block').remove();
        $('#contact .alert-danger').remove();
    }

    /**
     * Vérifie que l'email respecte
     * bien le bon format.
     * @param {*} email 
     */
    function validateEmail(email) {
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return emailReg.test(email);
    }

    /**
     * Vérifie que le numéro de téléphone
     * respecte le format Français
     * Retourne vrai ou faux
     * @param {*} tel 
     */
    var validateTel = tel => {
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        return telReg.test(tel);
    }

    /**
     * Vérifie si une adresse email de Contact correspondante à l'email en cours de saisie est déjà présente dans le tableau JS "Contacts"
     * Retourne vrai ou faux
     * @param {*} Contact 
     */
    function unContactEstPresent(Contact) {
        l("dans unContactEstPresent");
        let resultatRecherchePositif = false;
        for (let i = 0; i < CollectionDeContacts.length; i++) {
            l(CollectionDeContacts[i]);
            if (CollectionDeContacts[i].email === Contact.email) {
                resultatRecherchePositif = true;
                break;
            }
        };
        return resultatRecherchePositif;
    }

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon formulaire
    $('#contact').on('submit', function (e) {

        // -- Stopper la redirection de la page
        e.preventDefault();

        reinitialisationDuFormulaire();

        // -- Récupération des champs à vérifier
        const Nom = $("#nom");
        const Prenom = $("#prenom");
        const Email = $("#email");
        const Tel = $("#tel");
        ProchainContact = { 'nom': Nom.val(), 'prenom': Prenom.val(), 'email': Email.val(), 'tel': Tel.val() };

        // -- Vérification des informations
        let MonFormulaireEstValide = true;

        // -- Vérification du Prénom
        if (Prenom.val().length === 0) {

            MonFormulaireEstValide = false;
            /**
             * Si valeur saisie par l'utilisateur dans le champs "prénom" vide alors ajoute la classe 'has-error' à son parent avec un petit message d'information
             */

            Prenom.parent().addClass('has-error');
            $("<p class='help-block'>veuillez renseigner votre prénom.</p>").appendTo(Prenom.parent());

        } else {
            Prenom.parent().addClass('has-success');
        }

        // -- Vérification du Nom
        if (Nom.val().length === 0) {

            MonFormulaireEstValide = false;

            /**
             * Si valeur saisie par l'utilisateur dans le champs "nom" vide alors ajoute la classe 'has-error' à son parent avec un petit message d'information
             */

            Nom.parent().addClass('has-error');
            $("<p class='help-block'>veuillez renseigner votre nom.</p>").appendTo(Nom.parent());

        } else {
            Nom.parent().addClass('has-success');
        };

        // -- Vérification du Mail
        if (!validateEmail(Email.val())) {

            MonFormulaireEstValide = false;

            /**
             * Si valeur saisie par l'utilisateur dans le champs "email" non conforme avec expression régulière pour adresses email alors ajoute la classe 'has-error' à son parent avec un petit message d'information
             */

            Email.parent().addClass('has-error');
            $("<p class='help-block'>veuillez vérifier votre mail.</p>").appendTo(Email.parent());

        } else {
            Email.parent().addClass('has-success');
        }

        // -- Vérification du Tel
        if (!validateTel(Tel.val())) {

            MonFormulaireEstValide = false;

            /**
             * Si valeur saisie par l'utilisateur dans le champs "tel" non conforme avec expression régulière pour numéros de téléphone alors ajoute la classe 'has-error' à son parent avec un petit message d'information
             */

            Tel.parent().addClass('has-error');
            $("<p class='help-block'>veuillez vérifier votre numéro de téléphone.</p>").appendTo(Tel.parent());
        }
        else {
            Tel.parent().addClass('has-success');
        }

        // -- Si toutes mes informations sont valides
        if ($(this).find('.has-error').length === 0) {
            // if (MonFormulaireEstValide){

            /**
             * Si le contact est présent dans la collection, on informe l'utilisateur
             * Sinon, on peut procéder à la suite du traitement.
             */

            if (!unContactEstPresent(ProchainContact))
                ajouterContact(ProchainContact);
            else {
                alert("Adresse email saisie déjà présente dans notre répertoire, veuillez saisir une autre adresse email");
            }

        } else {
            $(this).prepend(`<div class="alert alert-danger">Nous n'avons pas été en mesure de valider votre contact. Veuillez vérifier vos informations.</div>`)
        }

    });

}); // fin de $()