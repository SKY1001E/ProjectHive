import { AfterViewInit, Component, NgModule, OnInit } from '@angular/core';
import { UiPartService } from "../../../services/uiParts.service";
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.scss']
})
export class ProjectPageComponent implements OnInit, AfterViewInit {
  items: MenuItem[] = []; 
  activeItem: MenuItem = {}; 

  constructor(private uiPart: UiPartService) {}

  ngOnInit(): void {
    this.uiPart.showMainNavbar.next(false);

    this.items = [
      { label: 'Назва проекту' },
      { label: 'Опис'},
      { label: 'Строки реалізації проекту' },
      { label: 'Керівник' }

    ];
    this.activeItem = this.items[0]; 
  }

  ngAfterViewInit(): void {}
}

@NgModule({
  imports: [ButtonModule, TabMenuModule],
  declarations: [ProjectPageComponent]
})
export class ProjectPageModule {}
