import { FormControl, FormControlName, FormGroup } from "@angular/forms";
import { UiPartService } from "../../../services/uiParts.service";
import {AfterViewInit, Component, NgModule, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { Task } from "src/app/main-v1/models/task";
import { TaskService } from "src/app/main-v1/services/task.service";
import { ActivatedRoute } from '@angular/router';
import { UserService } from "src/app/main-v1/services/user.service";
import { User } from "src/app/main-v1/models/user";
import { MessageService } from "primeng/api";


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit, AfterViewInit {
    projectId: number = null;
    managerId: number = null;
    executor: User = null;

    @ViewChild('headerTemplate') headerTemplate!: TemplateRef<any>;
    form!: FormGroup;
    executorForm!: FormGroup;

    constructor(public uiPart: UiPartService,
        private taskService: TaskService,
        private userService: UserService,
        private route: ActivatedRoute,
        private messageService: MessageService) {}

    ngOnInit(): void {
        this.uiPart.showMainNavbar.next(false);
        this.renderUpdateForm();

        this.route.params.subscribe(params => {
            this.projectId = parseInt(params['projectId']);
            this.managerId = parseInt(params['managerId']);
        })
    }

    ngAfterViewInit(): void {
    }

    private renderUpdateForm() {
        this.form = new FormGroup<any>({
            name: new FormControl(null),
            mark: new FormControl(null),
            description: new FormControl(null),
            date: new FormControl(null),
            priority: new FormControl(null)
        })

        this.executorForm = new FormGroup<any>({
            email: new FormControl(null)
        })
    }

    addTask() {
        const task: Task = {
            id: 0,
            name:  this.form.get('name')?.value ? this.form.get('name')?.value : "Task",
            description: this.form.get('description')?.value ? this.form.get('description')?.value : "No description",
            startDate: new Date(),
            endDate: this.form.get('date')?.value ? this.form.get('date')?.value : new Date(),
            status: "To do",
            priority: this.form.get('priority')?.value ? this.form.get('priority')?.value : "Normal",
            projectId: this.projectId,
            managerId: this.managerId,
            userId: this.executor.id
        }
        console.log(task);

        this.taskService.addTask(task).subscribe((response) => {
        })
        this.messageService.add({severity:'success', summary:'Завдання', detail:'Завдання успішно створено'});
    }

    addExecutor() {
        const email = this.executorForm.get('email').value;
        console.log(email);
        if(email != null && email != undefined) {
            this.userService.getUserByEmail(email)
            .subscribe((user: User) => {
                if(user != null) {
                    this.executor = user;
                    this.messageService.add({severity:'success', summary:'Виконавець', detail:'Виконавця призначено'});
                }
                else {
                    this.messageService.add({severity:'error', summary:'Виконавець', detail:'Користувача з такою адресою не знайдено'});
                }
            })
        }
        else {
            this.messageService.add({severity:'error', summary:'Виконавець', detail:'Введіть пошту'});
        }
    
    }

    removeExecutor() {
        this.executor = null;
        this.messageService.add({severity:'success', summary:'Виконавець', detail:'Виконавця видалено'});
    }

}

/* 

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

        console.log(project);

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

*/
