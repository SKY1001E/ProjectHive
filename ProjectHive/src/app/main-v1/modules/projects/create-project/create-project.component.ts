import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiPartService} from "../../../services/uiParts.service";

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit, AfterViewInit{

  constructor(public uiParts: UiPartService) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.uiParts.showMainNavbar.next(false);
  }

}
