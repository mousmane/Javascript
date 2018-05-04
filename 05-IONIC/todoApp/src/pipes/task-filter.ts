import {Pipe, PipeTransform} from '@angular/core';
import {Task} from "../models/task";
import * as _ from 'lodash';

@Pipe({
  name: 'TaskFilter',
  pure: false
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[], status: boolean): Task[] {
    // console.log('filter start');
    // console.log(tasks);
    return _.filter(tasks,{'status': status});
  }

}
