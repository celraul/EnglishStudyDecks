import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { routerTransition } from 'src/app/router.animations';
import { CompareValidator } from 'src/app/shared/validators/compare.validator';
import { RegisterModel } from 'src/app/core/model/iRegister.model';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    animations: [routerTransition()]
})
export class RegisterComponent implements OnInit {
    formRegister: FormGroup;

    constructor(private formBuilder: FormBuilder, private accountService: AccountService) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.formRegister = this.formBuilder.group({
            nickname: [null, [Validators.required, Validators.maxLength(100)]],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(5)]],
            confirmPassword: [null, [Validators.required, CompareValidator('password')]]
        });
    }

    register(register: RegisterModel) {
        if (!this.formRegister.invalid) {
            this.accountService.register(register).subscribe(result => {
            });
        }
    }
}