import {AfterViewInit, Component, NgModule, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { UiPartService } from "../../../services/uiParts.service";
import { ButtonModule } from 'primeng/button';
import {NgTemplateOutlet} from "@angular/common";
import { Project } from 'src/app/main-v1/models/project';
import { User } from 'src/app/main-v1/models/user';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/main-v1/services/project.service';
import { UserService } from 'src/app/main-v1/services/user.service';



@Component({
  selector: 'app-project-main',
  templateUrl: './project-main.component.html',
  styleUrls: ['./project-main.component.scss']
})
export class ProjectMainComponent {

    project: Project;
    admin: User;
    
    @ViewChild('headerTemplate') headerTemplate!: TemplateRef<any>;

    constructor(public uiPart: UiPartService,
                private route: ActivatedRoute,
                private projectService: ProjectService,
                private userService: UserService) {}
  
    ngOnInit(): void {
        this.uiPart.showMainNavbar.next(false);
        let project_id = 0;
        this.route.params.subscribe(params => {
            
            project_id = parseInt(params['id']);
        })

        this.projectService.getProjectById(project_id).subscribe(
            (response) => {
            this.project = response;
            this.userService.getUserById(this.project.userId).subscribe(
                (response) => {
                    this.admin = response;
                    //console.log(this.admin);
            })})
    }
  
    ngAfterViewInit(): void {
    }
}
