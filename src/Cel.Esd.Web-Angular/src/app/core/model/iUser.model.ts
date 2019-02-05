import { iBaseModel } from "./iBase.model";

export interface iUserModel extends iBaseModel {
    name: string,
    fullname: string,
    email: string,
    documentNumber: string,
    identityId: string,
    acessToken: string
}