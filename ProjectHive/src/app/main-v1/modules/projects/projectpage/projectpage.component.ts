import {AfterViewInit, Component, NgModule, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { UiPartService } from "../../../services/uiParts.service";
import { ButtonModule } from 'primeng/button';
import {NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.scss']
})
export class ProjectPageComponent implements OnInit, AfterViewInit {

  @ViewChild('headerTemplate') headerTemplate!: TemplateRef<any>;

  constructor(private uiPart: UiPartService) {}

  ngOnInit(): void {
    this.uiPart.showMainNavbar.next(false);
  }

  ngAfterViewInit(): void {
    this.uiPart.headerTemplate = this.headerTemplate;
  }
}

