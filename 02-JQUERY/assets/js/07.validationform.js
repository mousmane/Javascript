/**
 * Permet de vérifier le format d'une adresse email
 * @param {*} email 
 */
function validateEmail(email) {
    var TestEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return TestEmail.test(email);
}

/**
 * Permet de vérifier le format d'un numéro de téléphone français
 * @param {*} tel 
 */
var validateTel = tel => {
    var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
    return telReg.test(tel);
}

$(function () {

    /**
     * A la soumission du formulaire "#contact" ma fonction anonyme
     * 
     */

    $("#contact").submit(function (e) {
        // -- Arrêt de la redirection HTML
        e.preventDefault();

        // -- Réinitialiser les erreurs
        $('#contact .has-error').removeClass('has-error');
        $('#contact .help-block').remove();
        $('#contact .alert-danger').remove();



        // -- Récupération des champs du formulaire
        const nom = $('#nom');
        const prenom = $('#prenom');
        const email = $('#email');
        const tel = $('#tel');

        if (nom.val().length === 0) {

            /**
             * Si valeur saisie par l'utilisateur dans le champs "nom" vide alors ajoute la classe 'has-error' à son parent avec un petit message d'information
             */

            nom.parent().addClass('has-error');
            $("<p class='help-block'>veuillez renseigner votre nom.</p>").appendTo(nom.parent());

        } else {
            nom.parent().addClass('has-success');
        };

        if (prenom.val().length === 0) {

            prenom.parent().addClass('has-error');
            $("<p class='help-block'>veuillez renseigner votre prénom.</p>").appendTo(prenom.parent());

        } else {
            prenom.parent().addClass('has-success');
        }

        if (!validateEmail(email.val())) {

            email.parent().addClass('has-error');
            $("<p class='help-block'>veuillez vérifier votre mail.</p>").appendTo(email.parent());

        } else {
            email.parent().addClass('has-success');
        }

        if (!validateTel(tel.val())) {
            tel.parent().addClass('has-error');
            $("<p class='help-block'>veuillez vérifier votre numéro de téléphone.</p>").appendTo(tel.parent());
        }
        else {
            tel.parent().addClass('has-success');
        }

        // let ChampsAVerifier=$("#contact input");

        if ($(this).find('.has-error').length === 0) {
            $(this).replaceWith(`
            <div class="alert alert-success">Votre contact a bien été transmis !<br>Nous vous répondrons dans les meilleurs délais.</div>
            `);
        } else {
            $(this).prepend(`<div class="alert alert-danger">Nous n'avons pas été en mesure de valider votre contact. Veuillez vérifier vos informations.</div>`)
        }

    });
})
