import {AfterViewInit, Component, NgModule, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { UiPartService } from "../../../services/uiParts.service";
import { ButtonModule } from 'primeng/button';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-project-main',
  templateUrl: './project-main.component.html',
  styleUrls: ['./project-main.component.scss']
})
export class ProjectMainComponent {

    @ViewChild('headerTemplate') headerTemplate!: TemplateRef<any>;

    constructor(public uiPart: UiPartService) {}
  
    ngOnInit(): void {
      this.uiPart.showMainNavbar.next(false);
    }
  
    ngAfterViewInit(): void {
    }
}
