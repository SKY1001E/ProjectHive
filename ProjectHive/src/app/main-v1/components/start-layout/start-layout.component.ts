import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiPartService} from "../../services/uiParts.service";

@Component({
  selector: 'app-start-layout',
  templateUrl: './start-layout.component.html',
  styleUrls: ['./start-layout.component.scss']
})
export class StartLayoutComponent implements OnInit, AfterViewInit{

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
