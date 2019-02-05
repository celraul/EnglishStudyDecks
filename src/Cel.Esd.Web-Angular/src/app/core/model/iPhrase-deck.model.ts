import { iBaseModel } from "./iBase.model";

export interface iPhraseDeckModel extends iBaseModel {
    title: string,
    description: string,
    UserId: number,
}