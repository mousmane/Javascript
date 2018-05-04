import {Component, OnInit} from '@angular/core';
import {Task} from './models/task';
import {StorageService} from './services/storage/storage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // -- Notre Tableau de Tâches
  tasks: Task[] = [];

  constructor(private storage: StorageService){

  }

  /**
   * Se déclenche dans l'application à la création d'une nouvelle tâche dans app-add
   * @param $event
   */
  newTask(newTaskEvent: any) {
    /**
     * Ajout de la nouvelle tâche dans la liste des tâches.
     */
    this.tasks.push(newTaskEvent.task);
    // console.log(this.tasks);

    /**
     * Sauvegarde dans le localStorage
     */
    this.storage.save(this.tasks);
  }

  /** ngOnInit() : exécutée avant affichage page */
  ngOnInit(): void {
    /** Récupération des tâches au chargement de l'application */
    this.tasks = this.storage.getTasks();
  }

  /**
   * S'exécute à la terminaison d'une tâche
   * @param {Task} task
   */
  taskIsDone(task: Task) {
    task.status = true;
    this.storage.save(this.tasks);
  }

  removeTask(task: Task) {
    // -- Suppression de la tâche
    //this.tasks = this.tasks.filter(obj => obj !== task);
    _.pullAllWith(this.tasks, [task],_.isEqual)
    console.log(this.tasks);

    // -- Sauvegarde des tâches
    this.storage.save(this.tasks);
  }
}
