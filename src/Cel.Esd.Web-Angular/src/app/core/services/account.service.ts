import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SITE_API } from "src/app/app.apiConsts";
import { ResultApiModel } from "src/app/shared/model/result-api.model";
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { RegisterModel } from "../model/iRegister.model";
import { iResultLoginModel } from "src/app/shared/model/iResult-login.model";
import { iResultSaveProfileModel } from "src/app/shared/model/iResult-save-profile.module";

@Injectable()
export class AccountService {

    constructor(private httpClient: HttpClient) { }

    forgotPassword(email: string): Observable<ResultApiModel<boolean>> {
        return this.httpClient.post<ResultApiModel<boolean>>(`${SITE_API}/Account/forgotPassword`, {
            email: email
        }).pipe(map(res => res));
    }

    register(register: RegisterModel): Observable<ResultApiModel<iResultLoginModel>> {
        return this.httpClient.post<ResultApiModel<iResultLoginModel>>(`${SITE_API}/Account/register`, register)
            .pipe(map(res => res));
    }

    saveProfile(profile: RegisterModel): Observable<ResultApiModel<iResultSaveProfileModel>> {
        return this.httpClient.post<ResultApiModel<iResultSaveProfileModel>>(`${SITE_API}/Account/register`, profile)
            .pipe(map(res => res));
    }
}