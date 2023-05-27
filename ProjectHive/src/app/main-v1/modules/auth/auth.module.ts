import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {NgTemplateOutlet} from "@angular/common";

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
    ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
