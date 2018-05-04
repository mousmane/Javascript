import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../models/task';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  /**
   * La tâche à créer
   * @type {Task}
   */
  task: Task = new Task();

  /**
   * Permet d'émettre un évènement lors de la création d'une tâche
   * @type {EventEmitter<any>}
   */
  @Output() newTaskEvent = new EventEmitter();

  /**
   * Attribut pour la réinitialisation du Formulaire
   * @type {boolean}
   */
  active = true;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Fonction appelée à la soumission du formulaire de création d'une tâche
   */
  addTask() {
    // console.log(this.task);
    /**
     * A la soumission du formulaire par l'utilisateur, on émet un évènement
     */
    this.newTaskEvent.emit({task: this.task});

    /** Réinitialisation de la tâche */
    this.task = new Task();

    /** Réinitialisation du formulaire */
    this.active=false;
    setTimeout(() => this.active = true, 0);
  }
}
