import { Component, OnInit } from '@angular/core';
import { DndDropEvent, DropEffect } from "ngx-drag-drop";

@Component({
    selector: 'app-list-phrase-decks',
    templateUrl: './list-phrase-decks.component.html',
    styleUrls: ['./list-phrase-decks.component.scss']
})
export class ListPhraseDecksComponent implements OnInit {

    decks = [
        "Deck 1",
        "Deck 2",
        "Deck 3",
        "Deck 4",
        "Deck 5"];


    constructor() { }

    ngOnInit() { }

    layout: any;
    horizontalLayoutActive: boolean = false;
    private currentDraggableEvent: DragEvent;
    private currentDragEffectMsg: string;
    draggableListRight = [
        {
            content: { title: "deck 1" },
            effectAllowed: "move",
            disable: false,
            handle: false,
        },
        {
            content: { title: "deck 2" },
            effectAllowed: "move",
            disable: false,
            handle: false,
        },
        {
            content: { title: "deck 3" },
            effectAllowed: "move",
            disable: false,
            handle: false,
        },
        {
            content: { title: "deck 4" },
            effectAllowed: "move",
            disable: false,
            handle: false,
        },
        {
            content: { title: "deck 5" },
            effectAllowed: "move",
            disable: false,
            handle: false,
        },
        {
            content: { title: "deck 6" },
            effectAllowed: "move",
            disable: false,
            handle: false,
        },
        {
            content: { title: "deck 7" },
            effectAllowed: "move",
            disable: false,
            handle: false,
        },
        {
            content: { title: "deck 8" },
            effectAllowed: "move",
            disable: false,
            handle: false,
        },
        {
            content: { title: "deck 9" },
            effectAllowed: "move",
            disable: false,
            handle: false,
        }
    ];

    onDragStart(event: DragEvent) {
        debugger;
        this.currentDragEffectMsg = "";
        this.currentDraggableEvent = event;
    }

    onDragged(item: any, list: any[], effect: DropEffect) {
        debugger;
        this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;

        if (effect === "move") {

            const index = list.indexOf(item);
            list.splice(index, 1);
        }
    }

    onDragEnd(event: DragEvent) {
        debugger;
        this.currentDraggableEvent = event;
    }

    onDrop(event: DndDropEvent, list?: any[]) {
        debugger;
        if (list && event.dropEffect === "move") {
            let index = event.index;
            if (typeof index === "undefined") {
                index = list.length;
            }

            list.splice(index, 0, event.data);
        }
    }
}