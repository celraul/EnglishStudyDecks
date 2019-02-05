import { NgModule } from "@angular/core";
import { LoginRoutingModule } from "./login.routing.modules";
import { LoginComponent } from "./login.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ModalResetPassword } from "./modal-reset-password/modal-reset-password.component";
import { AccountService } from "src/app/core/services/account.service";

@NgModule({
    declarations: [
        LoginComponent,
        ModalResetPassword
    ],
    imports: [
        LoginRoutingModule,
        SharedModule
    ],
    entryComponents: [ModalResetPassword],
    providers: [AccountService]
})
export class LoginModule { }
