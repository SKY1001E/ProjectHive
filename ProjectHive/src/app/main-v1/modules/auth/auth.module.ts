import {NgModule} from "@angular/core";
import {AppComponent} from "../../../app.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {UiPartService} from "../../services/uiParts.service";
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";

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
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
