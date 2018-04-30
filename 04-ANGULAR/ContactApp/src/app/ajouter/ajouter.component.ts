import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  @Output() unContactEstCree = new EventEmitter();
  nouveauContact: Contact = new Contact();
  active = true;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Cette méthode est appelée après la soumission du formulaire
   */
  submitContact() {
    /**
     * A la soumission du formulaire, un évènement sera emis, il sera écouté par
     * l'application qui récupèrera les données du nouveau contact
     */
    this.unContactEstCree.emit({leContact: this.nouveauContact});
    // -- Réinitialiser le Nouveau Contact
    this.nouveauContact = new Contact();
    // -- Réinitialiser le formulaire
    this.active = false;
    setTimeout(() => this.active = true, 0);

    /**
     * Passer le formulaire de !active détruit le formulaire,
     * puis le remettre à active après un délai nul permet sa réinitialisation
     */

  }
}
