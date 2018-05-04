import { NgModule } from '@angular/core';
import { AddTaskComponent } from './add-task/add-task';
import {FormsModule} from "@angular/forms";

@NgModule({
	declarations: [AddTaskComponent],
	imports: [FormsModule],
	exports: [AddTaskComponent]
})
export class ComponentsModule {}
