import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { NgTemplateOutlet } from "@angular/common";
import { TaskComponent } from './task/task.component';
import { MessageService } from "primeng/api";
import { ToastModule } from 'primeng/toast';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AddTaskComponent,
    TaskComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {path: '', redirectTo: 'add', pathMatch: 'full'},
        {path: 'add/:managerId/:projectId', component: AddTaskComponent},
        {path: 'task/:Id', component: TaskComponent},
      ]),
      NgTemplateOutlet,
      ButtonModule,
      ReactiveFormsModule,
      ToastModule,
  ],
  exports: [
    AddTaskComponent
  ],
  providers: [MessageService]
})
export class TasksModule { }
