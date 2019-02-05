import { NgModule } from "@angular/core";
import { TextDecksComponent } from "./text-decks.component";
import { TextDecksRoutingModule } from "./text-decks.routing.module";

@NgModule({
    declarations: [
        TextDecksComponent
        ],
    imports: [
        TextDecksRoutingModule
      ],
    providers: []
})
export class TextDecksModule { }
