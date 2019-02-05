import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { iPhraseDeckModel } from 'src/app/core/model/iPhrase-deck.model';
import { iPhraseModel } from 'src/app/core/model/iPhrase.model';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-create-phrase-deck',
    templateUrl: './create-phrase-deck.component.html',
    styleUrls: ['./create-phrase-deck.component.scss']
})
export class CreatePhraseDecksComponent implements OnInit {
    formCreatePhraseDeck: FormGroup;
    formGroupAddPhrase: FormGroup;
    phraseDeck: iPhraseDeckModel = <iPhraseDeckModel>{};
    phraseCreate: iPhraseModel = <iPhraseModel>{};
    createPhraseOpen: boolean;
    phraseToBeChange: iPhraseModel;
    phrases: iPhraseModel[] = [
        <iPhraseModel>{ phrase: "He came across", translatePhrase: "deu de cara" },
        <iPhraseModel>{ phrase: "what a pity i am busy today", translatePhrase: "é uma pena! eu estou ocupado hoje" },
        <iPhraseModel>{ phrase: "this article aims to explain", translatePhrase: "Este artigo visa explicar" },
    ];

    // table
    dataSource = new MatTableDataSource<iPhraseModel>(this.phrases);
    displayedColumns: string[] = ['phrase', 'translatePhrase', 'actions'];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.initComponents();
    }

    initComponents() {
        this.formCreatePhraseDeck = this.formBuilder.group({
            title: [null, [Validators.required, Validators.maxLength(20)]],
            description: [null, [Validators.maxLength(50)]],
            phrases: [null, [Validators.required]]
        });

        this.formGroupAddPhrase = this.formBuilder.group({
            phrase: [null, [Validators.required, Validators.maxLength(100)]],
            translatePhrase: [null, [Validators.required, Validators.maxLength(100)]],
        });

        this.dataSource.paginator = this.paginator;
    }

    savePhrase(phrase: iPhraseModel) {
        if (this.phraseToBeChange) {
            var index = this.phrases.indexOf(this.phraseToBeChange);
            if (index != -1) {
                this.phrases[index] = phrase;
            }
        } else
            this.phrases.push(phrase);

        this.dataSource.data = this.phrases;
        this.formCreatePhraseDeck.get("phrases").setValue(this.phrases);

        this.clearChangePhrase();
    }
    
    clearChangePhrase(){
        this.formGroupAddPhrase.reset();
        this.phraseToBeChange = null;
    }

    deletePhrase(phrase: iPhraseModel) {
        var index = this.phrases.indexOf(phrase);
        if (index != -1) {
            this.phrases.splice(index, 1);
            this.dataSource.data = this.phrases;
            this.formCreatePhraseDeck.get("phrases").setValue(this.phrases);

            this.clearChangePhrase();
        }
    }

    editPhrase(phrase: iPhraseModel) {
        this.formGroupAddPhrase.get("phrase").setValue(phrase.phrase);
        this.formGroupAddPhrase.get("translatePhrase").setValue(phrase.translatePhrase);
        this.createPhraseOpen = true;
        this.phraseToBeChange = phrase;
    }

    savePhraseDeck() { }
}