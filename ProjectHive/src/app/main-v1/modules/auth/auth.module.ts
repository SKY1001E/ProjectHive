import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {NgTemplateOutlet} from "@angular/common";
import {ProjectPageModule} from "../projects/projects.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MessagesModule} from "primeng/messages";
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {TooltipModule} from "primeng/tooltip";

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
  ],
    imports: [
        RouterModule.forChild([
            {path: '', redirectTo: 'in', pathMatch: 'full'},
            {
                path: 'in', component: LoginComponent,
            },
            {
                path: 'up', component: RegistrationComponent,
            }
        ]),
        ButtonModule,
        NgTemplateOutlet,
        ReactiveFormsModule,
        MessagesModule,
        ToastModule,
        TooltipModule,
    ],
  providers: [MessageService],
  bootstrap: []
})
export class AuthModule { }
