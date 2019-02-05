import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToasterService } from "src/app/shared/services/toaster.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AccountService } from "src/app/core/services/account.service";

export interface DialogData {
    email: string;
}

@Component({
    selector: 'app-modal-reset-password',
    templateUrl: './modal-reset-password.component.html',
    styleUrls: ['./modal-reset-password.component.scss']
})
export class ModalResetPassword implements OnInit {
    formForgetPassword: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<ModalResetPassword>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private toasterService: ToasterService,
        private formBuilder: FormBuilder,
        private accountService: AccountService) {
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.formForgetPassword = this.formBuilder.group({
            email: [this.data.email, [Validators.required, Validators.email]]
        });
    }

    sendForgetPassword() {
        if (!this.formForgetPassword.invalid) {
            this.accountService.forgotPassword(this.formForgetPassword.get("email").value).subscribe(result => {
                this.toasterService.onSuccess("Email enviado com sucesso!");
                this.dialogRef.close();
            });
        }
    }

    closeModal() {
        this.dialogRef.close();
    }
}