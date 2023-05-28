import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProjectPageComponent} from "../projects/projectpage/projectpage.component";
import {NgForOf, NgTemplateOutlet} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {CapabilitiesComponent} from "./capabilities/capabilities.component";
import {PricingComponent} from "./pricing/pricing.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', redirectTo: 'capabilities', pathMatch: 'full'},
      {path: 'capabilities', component: CapabilitiesComponent},
      {path: 'prices', component: PricingComponent},
    ]),
    NgTemplateOutlet,
    ButtonModule,
    NgForOf
  ],
  exports: [
  ],
  declarations: [
    PricingComponent,
    CapabilitiesComponent,
  ]
})

export class InfoModule {}
