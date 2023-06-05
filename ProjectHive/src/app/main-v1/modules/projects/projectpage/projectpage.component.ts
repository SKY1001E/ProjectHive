import {AfterViewInit, Component, NgModule, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { UiPartService } from "../../../services/uiParts.service";
import { ButtonModule } from 'primeng/button';
import { Project } from 'src/app/main-v1/models/project';
import {ProjectService} from "../../../services/project.service";
import { UserService } from 'src/app/main-v1/services/user.service';

@Component({
  selector: 'app-projectpage',
  templateUrl: './projectpage.component.html',
  styleUrls: ['./projectpage.component.scss']
})
export class ProjectPageComponent implements OnInit, AfterViewInit {
    
    projects: Project[];

    @ViewChild('headerTemplate') headerTemplate!: TemplateRef<any>;

    constructor(
        public uiPart: UiPartService,
        private projectService: ProjectService,
        private userService: UserService) {}

    ngOnInit(): void {
        this.uiPart.showMainNavbar.next(false);

        let userInfo = this.userService.getUserInfo()
        console.log(userInfo);

        this.projectService.getProjectsByUser(parseInt(userInfo.id)).subscribe((projects) => {
            this.projects = projects;
            console.log(this.projects);
        })
    }

    ngAfterViewInit(): void {
    }
}

