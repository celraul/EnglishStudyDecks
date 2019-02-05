import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { SettingsComponent } from "./settings.component";
import { SettingsRoutingModule } from "./settings.routing.modules";

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports: [
        SettingsRoutingModule,
        SharedModule
    ],
    providers: []
})
export class SettingsModule { }
