import {Component, EventEmitter, Output} from '@angular/core';
import {Task} from "../../models/task";

/**
 * Generated class for the AddTaskComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-task',
  templateUrl: 'add-task.html'
})
export class AddTaskComponent {

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

  /**
   * Notifie de la création d'une nouvelle tâche par émission d'un évènement avec la nouvelle tâche en valeur
   * Déclenchée par la soumission du formulaire par l'utilisateur
   */
  notifyNewTask(){
    /** on émet un évènement */
    this.newTaskEvent.emit({task: this.task});

    /** Réinitialisation de la tâche */
    this.task = new Task();

    /** Réinitialisation du formulaire */
    this.active=false;
    setTimeout(() => this.active = true, 0);
  }

  constructor() {
  }
}
