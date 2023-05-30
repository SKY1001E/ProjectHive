import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { NgTemplateOutlet } from "@angular/common";



@NgModule({
  declarations: [
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {path: '', redirectTo: 'tasks', pathMatch: 'full'},
        {path: 'add', component: AddTaskComponent},
      ]),
      NgTemplateOutlet,
      ButtonModule
  ],
  exports: [
    AddTaskComponent
  ],
})
export class TasksModule { }
