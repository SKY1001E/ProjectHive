import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {NgTemplateOutlet} from "@angular/common";
import {ProjectPageComponent} from "./projectpage/projectpage.component";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "../auth/login/login.component";
import {RegistrationComponent} from "../auth/registration/registration.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: ProjectPageComponent},
    ]),
    NgTemplateOutlet,
    ButtonModule
  ],
  declarations: [
    ProjectPageComponent
  ]
})

export class ProjectPageModule {}
