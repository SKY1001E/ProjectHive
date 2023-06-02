import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMemberComponent } from './add-members/add-members.component';
import { RouterModule } from "@angular/router";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [
    AddMemberComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'add-members', pathMatch: 'full' },
      { path: 'add-members', component: AddMemberComponent },
    ]),
    ButtonModule
  ],
  exports: [
    AddMemberComponent
  ],
})
export class MembersModule { }
