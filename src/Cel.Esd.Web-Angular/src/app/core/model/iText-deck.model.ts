import { iBaseModel } from "./iBase.model";

export interface iTextDeckModel extends iBaseModel {
    text: string,
    translateText: string,
    deckId: number
}