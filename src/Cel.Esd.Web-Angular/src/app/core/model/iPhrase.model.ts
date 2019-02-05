import { iBaseModel } from "./iBase.model";

export interface iPhraseModel extends iBaseModel {
    phrase: string,
    translatePhrase: string,
    phraseDeckId: number,
}