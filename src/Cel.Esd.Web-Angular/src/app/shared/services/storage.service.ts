import { Injectable } from "@angular/core";
import { StorageModel } from "../model/iStorage.model";
import { USER_LOCALSTORAGE } from "src/app/app.apiConsts";

@Injectable()
export class StorageService {

    constructor() { }

    setLanguage(language: string) {
        var userStorage = this.getUserStorage();
        if (userStorage) {
            userStorage.language = language;
            this.setUserStorage(userStorage);
        } else {
            var newStorage = <StorageModel>{ language: language };
            this.setUserStorage(newStorage);
        }
    }

    getUserStorage(): StorageModel {
        return JSON.parse(localStorage.getItem(USER_LOCALSTORAGE));
    }

    setUserStorage(userStorage: StorageModel) {
        localStorage.setItem(USER_LOCALSTORAGE, JSON.stringify(userStorage));
    }
}