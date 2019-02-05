import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-deck',
    templateUrl: './deck.component.html',
    styleUrls: ['./deck.component.scss']
})
export class deckComponent implements OnInit {
    @Input() title: string

    ngOnInit() {
    }
}