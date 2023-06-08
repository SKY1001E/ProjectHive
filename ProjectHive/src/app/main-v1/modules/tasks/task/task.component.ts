import { TaskService } from "src/app/main-v1/services/task.service";
import { UiPartService } from "../../../services/uiParts.service";
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Task } from "src/app/main-v1/models/task";
import { ProjectService } from "src/app/main-v1/services/project.service";
import { Project } from "src/app/main-v1/models/project";
import { DatePipe } from '@angular/common';
import { User } from "src/app/main-v1/models/user";
import { UserService } from "src/app/main-v1/services/user.service";
import { FormControl, FormGroup } from "@angular/forms";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent  implements OnInit, AfterViewInit{
    @ViewChild('headerTemplate') headerTemplate!: TemplateRef<any>;

    task: Task = null;
    project: Project = null;
    executor: User = null;
    author: User = null;

    form!: FormGroup;
    executorForm!: FormGroup;

    constructor(public uiPart: UiPartService,
        private taskService: TaskService,
        private projectService: ProjectService,
        private userService: UserService,
        private route: ActivatedRoute,
        public datePipe: DatePipe,
        private messageService: MessageService) {}
  
    ngOnInit(): void {
        this.uiPart.showMainNavbar.next(false);

        let taskId = 0;
        this.route.params.subscribe(params => {
              
          taskId = parseInt(params['id']);
  
          this.taskService.getTaskById(taskId).subscribe(
              (response) => {
              this.task = response;
              this.renderUpdateForm();
              this.projectService.getProjectById(this.task.projectId).subscribe(
                  (response) => {
                      this.project = response;
                      
                      this.userService.getUserById(this.task.managerId).subscribe(
                          (response) => {
                              this.author = response;
  
                              this.userService.getUserById(this.task.userId).subscribe(
                                  (response) => {
                                      this.executor = response;
                                      

                          
          })})})})})
      
    }
  
    ngAfterViewInit(): void {

    }


    private renderUpdateForm() {
        this.form = new FormGroup<any>({
            name: new FormControl(null),
            description: new FormControl(null),
            date: new FormControl(null),
            priority: new FormControl(null),
            status: new FormControl(null)
        })

        this.form.get('date').setValue(this.datePipe.transform(this.task.endDate, 'yyyy-MM-dd'));
        this.form.get('name').setValue(this.task.name);
        this.form.get('description').setValue(this.task.description);
        this.form.get('status').setValue(this.task.status);
        this.form.get('priority').setValue(this.task.priority);



        this.executorForm = new FormGroup<any>({
            email: new FormControl(null)
        })
    }

    updateTask() {
        const task: Task = {
            id: this.task.id,
            name:  this.form.get('name')?.value ? this.form.get('name')?.value : this.task.name,
            description: this.form.get('description').value,
            startDate: this.task.startDate,
            endDate: this.form.get('date').value,
            status: this.form.get('status').value,
            priority: this.form.get('priority')?.value ? this.form.get('priority')?.value : this.task.priority,
            projectId: this.project.id,
            managerId: this.author.id,
            userId: this.executor ? this.executor.id : null
        }
        console.log(task);

        this.taskService.updateTask(task).subscribe(
                res => {this.messageService.add( {severity:'success', summary:'Профіль', detail:'Профіль успішно оновленний!'} ); }
        )
    }

    addExecutor() {
        const email = this.executorForm.get('email').value;
        if(email != null && email != undefined && email != "") {
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
