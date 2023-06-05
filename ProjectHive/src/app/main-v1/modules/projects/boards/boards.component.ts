import {AfterViewInit, Component, NgModule, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { UiPartService } from "../../../services/uiParts.service";
import { ButtonModule } from 'primeng/button';
import {NgTemplateOutlet} from "@angular/common";
import { Project } from 'src/app/main-v1/models/project';
import { User } from 'src/app/main-v1/models/user';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/main-v1/services/project.service';
import { UserService } from 'src/app/main-v1/services/user.service';
import { TaskService } from 'src/app/main-v1/services/task.service';
import { Task } from 'src/app/main-v1/models/task';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent {
    
    project: Project;
    admin: User;
    currentUserId: number = null;
    tasks: Task[];
    
    @ViewChild('headerTemplate') headerTemplate!: TemplateRef<any>;

    constructor(public uiPart: UiPartService,
                private route: ActivatedRoute,
                private projectService: ProjectService,
                private userService: UserService,
                private taskService: TaskService) {}
        
    ngOnInit(): void {
        this.currentUserId = parseInt(this.userService.getUserInfo().id)
        //console.log(this.userService.getUserInfo());
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
                    //console.log(this.currentUserId);
                    //console.log(this.project.id);
                    this.taskService.getTasks(this.currentUserId, this.project.id).subscribe((tasks) => {
                        this.tasks = tasks;
                        console.log(tasks);
                    })
            })})

        
    }
}
