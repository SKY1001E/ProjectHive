import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiPartService} from "../../../services/uiParts.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, AfterViewInit{

  constructor(private uiPart: UiPartService) {
  }

  ngOnInit(): void {
    this.uiPart.showMainNavbar.next(false);
  }

  ngAfterViewInit(): void {
  }
}
