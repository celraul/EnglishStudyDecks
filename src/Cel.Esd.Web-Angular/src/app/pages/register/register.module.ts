import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register.component";
import { RegisterRoutingModule } from "./register.routing.modules";
import { SharedModule } from "src/app/shared/shared.module";
import { AccountService } from "src/app/core/services/account.service";

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        RegisterRoutingModule,
        SharedModule
    ],
    providers: [AccountService]
})
export class RegisterModule { }