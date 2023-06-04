import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiPartService} from "../../../services/uiParts.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {Auth} from "../../../models/auth";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, AfterViewInit{

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

        console.log(this.form)
    }

    registerUser() {
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

        const register: Auth = {
            email: this.form.get('email')?.value,
            password: this.form.get('password')?.value
        }

        this.authService.register(register).subscribe((res) => {
            this.router.navigate(['/sign']).then(() => {
                this.messageService.add({ severity: 'success', summary: 'Register', detail: 'You registered successfully!' });
            })
        })
    }
}
