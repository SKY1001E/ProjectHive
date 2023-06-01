import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {NgTemplateOutlet} from "@angular/common";
import {ProjectPageComponent} from "./projectpage/projectpage.component";
import {RouterModule} from "@angular/router";
import {CreateProjectComponent} from "./create-project/create-project.component";
import { ProjectMainComponent } from './project-main/project-main.component';
import { BoardsComponent } from './boards/boards.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', redirectTo: 'projects', pathMatch: 'full'},
      {path: 'projects', component: ProjectPageComponent},
      {path: 'create', component: CreateProjectComponent},
      {path: 'project-main', component: ProjectMainComponent},
      {path: 'boards', component: BoardsComponent}
    ]),
    NgTemplateOutlet,
    ButtonModule
  ],
  exports: [
    ProjectPageComponent
  ],
  declarations: [
    ProjectPageComponent,
    CreateProjectComponent,
    ProjectMainComponent,
    BoardsComponent
  ]
})

export class ProjectPageModule {}
