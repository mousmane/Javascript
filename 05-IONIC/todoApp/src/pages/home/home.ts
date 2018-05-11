import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Task} from "../../models/task";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // -- Notre Tableau de Tâches
  tasks: Task[] = [];

  constructor(public navCtrl: NavController) {

  }

  addTask(newTaskEvent) {
    /**
     * Ajout de la nouvelle tâche dans la liste des tâches.
     */
    this.tasks.push(newTaskEvent.task);
    console.log(this.tasks);
  }

  toggleStatus(task: Task) {
    task.status = !task.status;
  }

  removeTask(task: Task) {
    // -- Suppression de la tâche
    this.tasks = this.tasks.filter(obj => obj !== task);
  }
}
