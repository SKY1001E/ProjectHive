import { UiPartService } from "../../../services/uiParts.service";
import {AfterViewInit, Component, NgModule, OnInit, TemplateRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

    @ViewChild('headerTemplate') headerTemplate!: TemplateRef<any>;

  constructor(public uiPart: UiPartService) {}

  ngOnInit(): void {
    this.uiPart.showMainNavbar.next(false);
  }

  ngAfterViewInit(): void {
  }

}
