import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiPartService} from "../../../services/uiParts.service";
import { Project } from 'src/app/main-v1/models/project';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/main-v1/services/user.service';
import { ProjectService } from 'src/app/main-v1/services/project.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit, AfterViewInit{

    form!: FormGroup;
    constructor(public uiParts: UiPartService, 
        private userService: UserService, 
        private projectService: ProjectService,
        private messageService: MessageService) {
    }

    ngAfterViewInit(): void {
    }

    ngOnInit(): void {
        this.uiParts.showMainNavbar.next(false);
        this.renderUpdateForm();
    }

    createProject() {
        const project: Project = {
            id: 0,
            title: this.form.get('title').value,
            description: this.form.get('description')?.value ? this.form.get('description')?.value : "No description",
            startDate: this.form.get('startDate')?.value ? this.form.get('startDate')?.value : new Date(),
            endDate: this.form.get('endDate')?.value,
            userId: this.userService.getUserInfo().id
        }

        //console.log(project);

        this.projectService.addProject(project).subscribe((response) => {
            })
        this.messageService.add({severity:'success', summary:'Проект', detail:'Проект успішно створено'});
        
    }

    private renderUpdateForm() {
        this.form = new FormGroup<any>({
            title: new FormControl(null),
            description: new FormControl(null),
            startDate: new FormControl(null),
            endDate: new FormControl(null)
        })
    }

}
