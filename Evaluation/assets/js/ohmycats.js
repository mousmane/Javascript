function l(e) { console.log(e) };

// -- Initialisation de jQuery (DOM READY)
$(function () {

    // Tableau d'adoptions avec accueillants et leur chat
    Adoptions = [];

    /* --------------------------------------------------------------
                            DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    /**
     * Réinitialise le formulaire : efface tout message d'erreur ou 
     * avertissement apparu lors de la saisie
     */
    function reinitialisationDuFormulaire() {
        $('#choixChat .has-error').removeClass('has-error');
        $('#choixChat .help-block').remove();
        $('#choixChat .alert-danger').remove();
    }

    /**
     * Enregistre l'adoption d'un chat
     * @param {*} Chat 
     */
    function adopterChat(Chat) {

        // -- Réinitialisation du Formulaire
        $('#choixChat').trigger('reset');

        // -- Alerte une Notification
        l($(".alert-adoption").first().eq(0));
        $(".alert-adoption").first().show().delay(5000);

    }

    /* --------------------------------------------------------------
                    TRAITEMENT DU FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon formulaire
    $('#choixChat').on('submit', function (e) {
        // -- Arrêt de la redirection de la page
        e.preventDefault();

        // Réinitialisation du formulaire
        reinitialisationDuFormulaire();

        // -- Récupération des champs à vérifier
        const chatChoisi = $('#selectionChat option:selected');
        const raisonAdoption = $('#raisonAdoption');
        // -- Vérification du choix d'un chat
        if (chatChoisi.val().length === 0) {
            chatChoisi.parent().addClass('has-error');
            $("<p class='help-block'>veuillez choisir un chat.</p>").appendTo(chatChoisi.parent());
        } else {
            chatChoisi.parent().addClass('has-success');
        };

        // -- Vérification de la saisie de raisons d'adoption
        if (raisonAdoption.val().length < 15) {
            raisonAdoption.parent().addClass('has-error');
            $("<p class='help-block'>veuillez saisir la(les) raison(s) d'adoptions (15 caractères minimum).</p>").appendTo(raisonAdoption.parent());
        } else {
            raisonAdoption.parent().addClass('has-success');
        };

        // -- Si toutes mes informations sont valides
        if ($(this).find('.has-error').length === 0) {
            adopterChat(chatChoisi);
        } else {
            $(this).prepend(`<div class="alert alert-danger">Nous n'avons pas été en mesure de valider votre demande d'adoption. Veuillez vérifier les informations.</div>`)
        }
    });



}); // fin de $() Initialisation de jQuery