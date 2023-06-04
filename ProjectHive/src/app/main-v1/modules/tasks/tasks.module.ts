import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { NgTemplateOutlet } from "@angular/common";
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    AddTaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {path: '', redirectTo: 'add', pathMatch: 'full'},
        {path: 'add', component: AddTaskComponent},
        {path: 'task', component: TaskComponent},
      ]),
      NgTemplateOutlet,
      ButtonModule
  ],
  exports: [
    AddTaskComponent
  ],
})
export class TasksModule { }
