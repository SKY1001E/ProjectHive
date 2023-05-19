import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiPartService} from "../services/uiParts.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit{
  isVisibleNav = true;

  constructor(
    public uiParts: UiPartService
  ) {
  }

  ngOnInit(): void {
    this.uiParts.showMainNavbar.subscribe(val => {
      this.isVisibleNav = val;
    })
  }

  ngAfterViewInit(): void {
  }
}
