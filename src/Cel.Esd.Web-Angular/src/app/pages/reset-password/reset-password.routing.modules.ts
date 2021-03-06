import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResetPasswordComponent } from "./reset-password.component";

const routes: Routes = [
    {
        path: '',
        component: ResetPasswordComponent
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
    declarations: []
})
export class ResetPasswordRoutingModule { }