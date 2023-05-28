import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {NgTemplateOutlet} from "@angular/common";
import {ProjectPageComponent} from "./projectpage/projectpage.component";
import {RouterModule} from "@angular/router";
import {CreateProjectComponent} from "./create-project/create-project.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', redirectTo: 'projects', pathMatch: 'full'},
      {path: 'projects', component: ProjectPageComponent},
      {path: 'create', component: CreateProjectComponent}
    ]),
    NgTemplateOutlet,
    ButtonModule
  ],
  exports: [
    ProjectPageComponent
  ],
  declarations: [
    ProjectPageComponent,
    CreateProjectComponent
  ]
})

export class ProjectPageModule {}
