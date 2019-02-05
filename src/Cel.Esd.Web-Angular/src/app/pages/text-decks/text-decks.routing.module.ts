import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TextDecksComponent } from "./text-decks.component";

const routes: Routes = [
    {
        path: '',
        component: TextDecksComponent
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
    declarations: []
})
export class TextDecksRoutingModule { }