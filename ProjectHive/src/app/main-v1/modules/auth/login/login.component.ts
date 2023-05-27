import {AfterViewInit, Component, Inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UiPartService} from "../../../services/uiParts.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {


  constructor(
    private uiPart: UiPartService
  ) {
  }

  ngOnInit(): void {
    this.uiPart.showMainNavbar.next(false)
  }

  ngAfterViewInit(): void {

  }

}
