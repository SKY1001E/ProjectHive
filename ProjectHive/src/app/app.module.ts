import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import { MainComponent } from './main-v1/main/main.component';
import {SidebarModule} from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TooltipModule} from "primeng/tooltip";
import { StartLayoutComponent } from './main-v1/components/start-layout/start-layout.component';
import { PricingComponent } from './main-v1/modules/infopages/pricing/pricing.component';
import { CapabilitiesComponent } from './main-v1/modules/infopages/capabilities/capabilities.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartLayoutComponent,
    PricingComponent,
    CapabilitiesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    SidebarModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
