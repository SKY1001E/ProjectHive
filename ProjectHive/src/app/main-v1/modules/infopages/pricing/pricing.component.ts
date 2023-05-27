import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiPartService} from "../../../services/uiParts.service";

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit, AfterViewInit{
    constructor(
        private uiPart: UiPartService
      ) {
      }
    
      ngOnInit(): void {
        this.uiPart.showMainNavbar.next(true);
      }
    
      ngAfterViewInit(): void {
      }
}
