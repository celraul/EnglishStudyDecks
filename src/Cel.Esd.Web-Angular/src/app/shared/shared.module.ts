import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from "../security/auth.interceptor";
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NotFoundPageComponent } from "../pages/not-found-page/not-found-page.component";
import { MaterialModule } from "./components/material/material.module";
import { TranslateModule } from "@ngx-translate/core";
import { RouterModule } from "@angular/router";
import { BoostrapComponentsModule } from "./components/boostrap/boostrap-components.module";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    exports: [
        CommonModule,
        RouterModule,
        NavComponent,
        SidebarComponent,
        FooterComponent,
        NotFoundPageComponent,
        MaterialModule,
        TranslateModule,
        BoostrapComponentsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        TranslateModule,
        BoostrapComponentsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        NavComponent,
        SidebarComponent,
        FooterComponent,
        NotFoundPageComponent
    ],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
            ]
        }
    }
}