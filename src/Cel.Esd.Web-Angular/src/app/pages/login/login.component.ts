import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/security/auth.service';
import { LoginModel } from 'src/app/shared/model/login.model';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { MatDialog } from '@angular/material';
import { ModalResetPassword } from './modal-reset-password/modal-reset-password.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit, OnDestroy {
    formLogin: FormGroup;
    @ViewChild("selectLanguage") selectLanguageElementRef: ElementRef;

    constructor(private formBuilder: FormBuilder, private authService: AuthService,
        private toasterService: ToasterService, private router: Router,
        private translateService: TranslateService, private storageService: StorageService,
        private dialog: MatDialog) { }

    ngOnInit() {
        this.initComponents();
    }

    ngOnDestroy() { }

    initComponents() {
        this.initLanguage();
        this.initForm();
    }

    initLanguage() {
        this.translateService.addLangs(['en', 'pt-br', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        var storage = this.storageService.getUserStorage();
        if (storage && storage.language) {
            this.translateService.use(storage.language);
            this.selectLanguageElementRef.nativeElement.value = storage.language;
        }
    }

    initForm() {
        this.formLogin = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]]
        });
    }

    onLoggedin(login: LoginModel) {
        if (!this.formLogin.invalid) {
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/']);
            // this.authService.login(login).subscribe(result => {
            //     localStorage.setItem('isLoggedin', 'true');
            // });
        } else {
            this.toasterService.onInfo("Nome e senha devem ser informados")
        }
    }

    resetPassword() {
        const dialogRef = this.dialog.open(ModalResetPassword, {
            width: '500px',
            height: '350px',
            data: { email: this.formLogin.get("email").value }
        });

        dialogRef.afterClosed().subscribe(result => {
        });

    }

    changeLanguage($event) {
        this.translateService.use($event.target.value);
        this.storageService.setLanguage($event.target.value);
    }
}
