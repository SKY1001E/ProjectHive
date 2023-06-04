import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UiPartService} from "../../../services/uiParts.service";
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, AfterViewInit{

    user!: User;
    openDialog!: boolean;
    form!: FormGroup;

    constructor(
        public uiParts: UiPartService,
        private userService: UserService,
        private messageService: MessageService
    ) {
    }

    ngAfterViewInit(): void {
    }

    ngOnInit(): void {
        this.uiParts.showMainNavbar.next(false);

        this.getUser();
        this.renderUpdateForm();
    }

    openUpdateDialog() {
        this.openDialog = !this.openDialog;

    }

    updateUser() {

        const user: User = {
            id: this.user.id,
            login: this.form.get('login')?.value ? this.form.get('login')?.value : this.user.login,
            email: this.user.email,
            firstName: this.form.get('firstName')?.value ? this.form.get('firstName')?.value : this.user.firstName,
            lastName: this.form.get('lastName')?.value ? this.form.get('lastName')?.value : this.user.lastName,
            password: this.user.password,
            role: this.user.role,
            profileImage: this.user.profileImage
        }

        this.userService.updateUser(user).subscribe(res => {
            this.messageService.add({severity:'success', summary:'Профіль', detail:'Профіль успішно оновленний!'});
            this.getUser();
            this.openDialog = !this.openDialog;
        });
    }

    private renderUpdateForm() {
        this.form = new FormGroup<any>({
            login: new FormControl(null),
            firstName: new FormControl(null),
            lastName: new FormControl(null)
        })
    }

    private getUser() {
        const email = this.userService.getUserInfo().email;


        this.userService.getUserByEmail(email)
            .subscribe((user: User) => {
                this.user = user;
            })
    }
}
