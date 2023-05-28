import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProjectPageComponent} from "../projects/projectpage/projectpage.component";
import {CreateProjectComponent} from "../projects/create-project/create-project.component";
import {NgTemplateOutlet} from "@angular/common";
import {ButtonModule} from "primeng/button";
import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: ProfilePageComponent},
    ]),
    NgTemplateOutlet,
    ButtonModule
  ],
  exports: [],
  declarations: [
    ProfilePageComponent
  ]
})

export class ProjectPageModule {}
