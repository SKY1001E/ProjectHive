import {AfterViewInit, Component, Inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UiPartService} from "../../../services/uiParts.service";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Auth} from "../../../models/auth";
import {MessageService} from "primeng/api";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

    form!: FormGroup;

    constructor(
    private uiPart: UiPartService,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.uiPart.showMainNavbar.next(false)
      this.renderForm()
    }

    ngAfterViewInit(): void {

    }

    private renderForm() {
        this.form = new FormGroup<any>({
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(8)
            ])
        })
    }

    login() {
        if(this.form.get('email')?.errors?.['required']) {
            this.messageService.add({severity:'error', summary:'Validate', detail:'Email is required!'});
            return;
        } else if(this.form.get('email')?.errors?.['email']) {
            this.messageService.add({severity:'error', summary:'Validate', detail:'Email is not correct, for example: project-hive@nure.ua!'});
            return;
        } else if (this.form.get('password')?.errors?.['required']) {
            this.messageService.add({severity:'error', summary:'Validate', detail:'Password is required!'});
            return;
        }

        const login: Auth = {
            email: this.form.get('email')?.value,
            password: this.form.get('password')?.value
        }

        this.authService.login(login)
            .subscribe(res => {
                //console.log(res)
                //console.log(this.authService.isAuthenticated())
                this.router.navigate(['/projects', 'projects']).then(() => {})
            })
    }

}
