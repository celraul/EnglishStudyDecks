import { NgModule } from "@angular/core";
import { PhraseDecksRoutingModule } from "./phrase-decks.routing.modules";
import { ListPhraseDecksComponent } from "./list-decks/list-phrase-decks.component";
import { LearnPhraseDecksComponent } from "./learn/learn-phrase-deck.component";
import { StudyPhraseDecksComponent } from "./study/study-phrase-deck.component";
import { CreatePhraseDecksComponent } from "./create/create-phrase-deck.component";
import { SharedModule } from "src/app/shared/shared.module";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DndModule } from 'ngx-drag-drop';

@NgModule({
    declarations: [
        LearnPhraseDecksComponent,
        ListPhraseDecksComponent,
        StudyPhraseDecksComponent,
        CreatePhraseDecksComponent
    ],
    imports: [
        PhraseDecksRoutingModule,
        SharedModule,
        DragDropModule,
        DndModule
    ],
    providers: []
})
export class PhraseDecksModule { }
