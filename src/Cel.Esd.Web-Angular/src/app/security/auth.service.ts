import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResultApiModel } from "../shared/model/result-api.model";
import { iResultLoginModel } from "../shared/model/iResult-login.model";
import { HttpClient } from "@angular/common/http";
import { LoginModel } from "../shared/model/login.model";
import { SITE_API } from "../app.apiConsts";
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    login(login: LoginModel): Observable<ResultApiModel<iResultLoginModel>> {
        return this.httpClient.post<ResultApiModel<iResultLoginModel>>(`${SITE_API}/Auth/login`, login)
            .pipe(map(res => res));
    }
}