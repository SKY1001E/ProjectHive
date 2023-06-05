import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main-v1/main/main.component";
import {LoginComponent} from "./main-v1/modules/auth/login/login.component";
import {RegistrationComponent} from "./main-v1/modules/auth/registration/registration.component";
import {ProjectPageComponent} from "./main-v1/modules/projects/projectpage/projectpage.component";
import {StartLayoutComponent} from "./main-v1/components/start-layout/start-layout.component";
import {PricingComponent} from "./main-v1/modules/infopages/pricing/pricing.component";
import {CapabilitiesComponent} from "./main-v1/modules/infopages/capabilities/capabilities.component";
import { AddMemberComponent } from './main-v1/modules/members/add-members/add-members.component';
import {AuthGuard} from "./main-v1/guards/auth.guard";

const routes: Routes = [
  {path: '', component: MainComponent,
    children: [
      {path: '', redirectTo: 'new', pathMatch: 'full'},
      {path: 'new', component: StartLayoutComponent},
      {path: 'sign',
        loadChildren: () => import('../app/main-v1/modules/auth/auth.module').then(m => m.AuthModule)
      },
      {path: 'projects',
          loadChildren: () => import('../app/main-v1/modules/projects/projects.module').then(m => m.ProjectPageModule),
          //canActivate: [AuthGuard]
      },
      {
        path: 'info',
        loadChildren: () => import('../app/main-v1/modules/infopages/info.module').then(m => m.InfoModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../app/main-v1/modules/profile/profile.module').then(m => m.ProfileModule),
         // canActivate: [AuthGuard]
      },
      {
        path: 'tasks',
        loadChildren: () => import('../app/main-v1/modules/tasks/tasks.module').then(m => m.TasksModule),
         // canActivate: [AuthGuard]
      },
      {
        path: 'members',
        loadChildren: () => import('../app/main-v1/modules/members/members.module').then(m => m.MembersModule),
         // canActivate: [AuthGuard]
      },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
