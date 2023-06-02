import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiPartService} from "../../../services/uiParts.service";

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.scss']
})
export class MembersPageComponent implements OnInit, AfterViewInit{

  constructor(public uiParts: UiPartService) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.uiParts.showMainNavbar.next(false);
  }

}
