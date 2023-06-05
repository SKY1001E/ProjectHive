import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {NgTemplateOutlet, NgForOf} from "@angular/common";
import {ProjectPageComponent} from "./projectpage/projectpage.component";
import {RouterModule} from "@angular/router";
import {CreateProjectComponent} from "./create-project/create-project.component";
import { ProjectMainComponent } from './project-main/project-main.component';
import { BoardsComponent } from './boards/boards.component';
import { MembersPageComponent } from './members-page/members-page.component';
import { DatePipe } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', redirectTo: 'projects', pathMatch: 'full'},
      {path: 'projects', component: ProjectPageComponent},
      {path: 'create', component: CreateProjectComponent},
      {path: 'project/:id', component: ProjectMainComponent},
      {path: 'boards/:id', component: BoardsComponent},
      {path: 'members/:id', component: MembersPageComponent}
    ]),
    NgTemplateOutlet,
    ButtonModule,
    NgForOf,
    DatePipe,
    ReactiveFormsModule,
    ToastModule
  ],
  exports: [
    ProjectPageComponent,
  ],
  providers: [MessageService],
  declarations: [
    ProjectPageComponent,
    CreateProjectComponent,
    ProjectMainComponent,
    BoardsComponent,
    MembersPageComponent
  ]
})

export class ProjectPageModule {}
