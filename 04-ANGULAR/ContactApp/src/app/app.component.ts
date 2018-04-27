/**
 * Pour déclarer une classe comme composant de notre application on importe "Component"
 * depuis @angular/core
 */
import { Component } from '@angular/core';

class Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: object;
  phone?: number;
  website?: string;
  company?: object;
}

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
export class AppComponent {
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
  choisirContact(contactSelectionne){
    this.contactActif = contactSelectionne;
    console.log(this.contactActif);
  }
}
