/**
 * Pour déclarer une classe comme composant de notre application on importe "Component"
 * depuis @angular/core
 */
import {Component, OnInit} from '@angular/core';
import { Contact } from './models/contact';
import {ContactApiService} from './services/contact-api.service';

/**
 * Décorateur (décorateur) qui permet de préciser à Angular quel HTML et CSS utiliser pour le modèle
 *
 */

@Component({
  /**
   * Le sélecteur détermine la manière dont le composant sera affiché dans la vue HTML :
   * dans ce cas au niveau de <app-root></app-root>
   */
  selector: 'app-root',

  /**
   * "templateUrl" ou "template est la partie visible du composant. c'est ce qui s'affiche à l'écran
   * lorsque le composant est utilisé
   */
  templateUrl: './app.component.html',
  /**
   * "styleUrls" ou style[]
   */
  styleUrls: ['./app.component.css']
})

/**
 * La classe contient les données du composant mais aussi son comportement.
 * Dans notre contexte MVVM, notre classe correspond au ViewModel
 */
export class AppComponent implements OnInit {
  constructor(private contactApiService: ContactApiService) {}

  // -- Déclaration / affection d'une valeur à title
  title = 'Gestion de mes contacts';

  // -- Contact choisi par mon utilisateur
  contactActif: Contact;

  unContact: Contact = {
    id : 1,
    name : 'Ousmane MAMA',
    username : 'ousmanemama',
    email : 'om@live.fr'
  };
  mesContacts: Contact[] = [
    {
      id        :   1,
      name      : 'Hugo LIEGEARD',
      username  : 'hugoliegeard',
      email     : 'wf3@hl-media.fr'
    },
    {
      id        :   2,
      name      : 'Greg D\'HAEM',
      username  : 'gregdhaem',
      email     : 'greg.d@hl-media.fr'
    },
    {
      id        :   3,
      name      : 'Salim SOUMARE',
      username  : 'salimsoumare',
      email     : 'salim.s@hl-media.fr'
    },
    {
      id        :   4,
      name      : 'Cheffia BENALLAL',
      username  : 'cheffiabennallal',
      email     : 'cheffia.b@hl-media.fr'
    }
  ];

  /**
   * Prend un contact en paramètre, valeur qu'elle affecte à la variable
   * contactActif
   * @param contactSelectionne
   */
  choisirContact(contactSelectionne) {
    this.contactActif = contactSelectionne;
    console.log(this.contactActif);
  }

  /**
   * Permet d'ajouter un nouveau contact dans la liste de contacts
   * @param event
   */
  ajoutNouveauContactAListeContacts(event: any) {
    console.log(event);
    // -- Récupération du contact via l'évènement
    const leContact: Contact = event.leContact;
    // -- Attribution d'un ID au contact
    leContact.id = Date.now();
    console.log(leContact);
    // -- Ajout du contact dans la liste
    this.mesContacts.push(leContact);
    console.log(this.mesContacts);
  }

  /**
   * La méthode ngOnInit est appelée automatiquement par Angular à l'initialisation/la construction du composant
   */
  ngOnInit(): void {
    console.log(this);
    this.contactApiService.getContacts().subscribe(
      contacts => {
        console.log(contacts);
        this.mesContacts = contacts;
      }
    );
  }
}
