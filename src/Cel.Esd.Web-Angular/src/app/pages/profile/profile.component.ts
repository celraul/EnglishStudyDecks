import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/core/model/iRegister.model';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    formProfile: FormGroup;

    constructor(private formBuilder: FormBuilder, private accountService: AccountService) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.formProfile = this.formBuilder.group({
            nickname: [null, [Validators.required, Validators.maxLength(100)]],
            email: [{value: 'teste@teste.com', disabled: true}, [Validators.required, Validators.email]]
        });
    }

    saveProfile(profile: RegisterModel) {
        if (!this.formProfile.invalid) {
            this.accountService.saveProfile(profile).subscribe(result => {
            });
        }
    }
}