import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiPartService} from "../../../services/uiParts.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, AfterViewInit{

  constructor(public uiParts: UiPartService) {
  }


  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.uiParts.showMainNavbar.next(false);
  }

}
