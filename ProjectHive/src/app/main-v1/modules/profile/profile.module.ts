import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProjectPageComponent} from "../projects/projectpage/projectpage.component";
import {CreateProjectComponent} from "../projects/create-project/create-project.component";
import {NgTemplateOutlet} from "@angular/common";
import {ButtonModule} from "primeng/button";
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";


@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ProfilePageComponent},
        ]),
        NgTemplateOutlet,
        ButtonModule,
        DialogModule,
        InputTextModule,
        ReactiveFormsModule,
        ToastModule
    ],
  exports: [],
    providers: [MessageService],
  declarations: [
    ProfilePageComponent
  ]
})

export class ProfileModule {}
