import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { ProfileRoutingModule } from "./profile.routing.modules";
import { SharedModule } from "src/app/shared/shared.module";
import { AccountService } from "src/app/core/services/account.service";

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        ProfileRoutingModule,
        SharedModule
    ],
    providers: [AccountService]
})
export class ProfileModule { }
