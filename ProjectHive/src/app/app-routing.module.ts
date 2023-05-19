import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main-v1/main/main.component";
import {LoginComponent} from "./main-v1/modules/auth/login/login.component";
import {RegistrationComponent} from "./main-v1/modules/auth/registration/registration.component";
import {StartLayoutComponent} from "./main-v1/components/start-layout/start-layout.component";

const routes: Routes = [
  {path: '', component: MainComponent,
    children: [
      {path: '', redirectTo: 'new', pathMatch: 'full'},
      {path: 'new', component: StartLayoutComponent},
      {path: 'sign',
        loadChildren: () => import('../app/main-v1/modules/auth/auth.module').then(m => m.AuthModule)
      },
      {path: 'register', component: RegistrationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
