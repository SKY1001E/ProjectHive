import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiPartService} from "../../../services/uiParts.service";

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent implements OnInit, AfterViewInit {
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
