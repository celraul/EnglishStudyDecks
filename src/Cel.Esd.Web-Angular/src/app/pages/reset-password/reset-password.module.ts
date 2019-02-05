import { NgModule } from "@angular/core";
import { ResetPasswordComponent } from "./reset-password.component";
import { ResetPasswordRoutingModule } from "./reset-password.routing.modules";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations: [
        ResetPasswordComponent
    ],
    imports: [
        ResetPasswordRoutingModule,
        SharedModule
    ],
    providers: []
})
export class ResetPasswordModule { }