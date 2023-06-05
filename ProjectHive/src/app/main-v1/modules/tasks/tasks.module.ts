import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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
        {path: '', redirectTo: '/new', pathMatch: 'full'},
        {path: 'add/:managerId/:projectId', component: AddTaskComponent},
        {path: 'task/:id', component: TaskComponent},
      ]),
      NgTemplateOutlet,
      ButtonModule,
      ReactiveFormsModule,
      ToastModule,
  ],
  exports: [
    AddTaskComponent
  ],
  providers: [MessageService,
    DatePipe]
})
export class TasksModule { }
