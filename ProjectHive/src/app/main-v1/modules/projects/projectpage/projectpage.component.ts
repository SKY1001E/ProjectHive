import { AfterViewInit, Component, NgModule, OnInit } from '@angular/core';
import { UiPartService } from "../../../services/uiParts.service";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.scss']
})
export class ProjectPageComponent implements OnInit, AfterViewInit {
  constructor(private uiPart: UiPartService) {}

  ngOnInit(): void {
    this.uiPart.showMainNavbar.next(false);
  }

  ngAfterViewInit(): void {}
}

@NgModule({
  imports: [ButtonModule],
  declarations: [ProjectPageComponent]
})
export class ProjectPageModule {}
