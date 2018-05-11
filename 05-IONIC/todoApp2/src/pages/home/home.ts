import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Task} from "../../models/task";
import {TaskProvider} from "../../providers/task/task";
import * as _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, private taskProvider: TaskProvider) {

  }

  /**
   * Nouvelle tâche en cours de création
   * @type {Task}
   */
  task: Task = new Task();

  /**
   * Liste des tâches
   * @type {any[]}
   */
  tasks: Task[] = [];

  /**
   * Paramètre booléen d'affichage du formulaire
   * @type {boolean}
   */
  active: boolean = true;

  /**
   * Pour la gestion des dates
   * @type {Date}
   */
  date: Date = new Date();

  /**
   * Effectue la sauvegarde de la nouvelle tâche
   */
  saveTask(): void {
    // Vérification d'une saisie effective d'un titre de tâche puis ajout de la tâche
    if (undefined !== this.task.title){
      // Attribution d'un id
      this.task.id = Date.now();

      // Ajout de la nouvelle tâche au tableau de tâches
      this.tasks.push(this.task);

      // Sauvegarde de la liste des tâches
      this.taskProvider.saveTasks(this.tasks);

      // Réinitialisation
      this.task = new Task();
      this.active = false;
      setTimeout(()=> this.active = true,0);
    }
  }

  /**
   * Déclenche l'enregistrement de la nouvelle tâche sur pression de la touche Entrée
   * @param keyCode
   */
  enterSave(keyCode: any) {
    if (keyCode === 13){
      this.saveTask();
    }
  }

  /**
   * Traitements effectués avant affichage graphique
   */
  ngOnInit(){
    /**
     * Au chargement de mon application, je récupère les tâches sauvegardées
     */
    this.taskProvider.getTasks().then(tasks => {
      if (null !== tasks){
        this.tasks = tasks;
      }
    });
  }

  /**
   * Effectue une sauvegarde des tâches
   */
  saveOurTasks() {
    console.log(this.tasks);
    this.taskProvider.saveTasks(this.tasks);
  }

  /**
   * Supprime une tâche
   * @param {Task} task
   */
  deleteTask(task: Task): void {
    _.pullAllWith(this.tasks,[task],_.isEqual);
    this.taskProvider.saveTasks(this.tasks);
  }
}
