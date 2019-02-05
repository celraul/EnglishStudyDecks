import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LearnPhraseDecksComponent } from "./learn/learn-phrase-deck.component";
import { ListPhraseDecksComponent } from "./list-decks/list-phrase-decks.component";
import { CreatePhraseDecksComponent } from "./create/create-phrase-deck.component";

const routes: Routes = [
    {
        path: '',
        component: ListPhraseDecksComponent
    },
    {
        path: 'learn/:id',
        component: LearnPhraseDecksComponent
    },
    {
        path: 'study/:id',
        component: LearnPhraseDecksComponent
    },
    {
        path: 'create',
        component: CreatePhraseDecksComponent
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
    declarations: []
})
export class PhraseDecksRoutingModule { }