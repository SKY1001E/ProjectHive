import { UiPartService } from "../../../services/uiParts.service";
import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
    @ViewChild('headerTemplate') headerTemplate!: TemplateRef<any>;

    constructor(public uiPart: UiPartService) {}
  
    ngOnInit(): void {
      this.uiPart.showMainNavbar.next(false);
    }
  
    ngAfterViewInit(): void {
    }
}
