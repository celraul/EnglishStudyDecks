import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.modules";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ],
    providers: []
})
export class HomeModule { }
