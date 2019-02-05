import { NgtUniversalModule } from '@ng-toolkit/universal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CustomErrorHandler } from './app.error-handler';
import { AppRoutingModule } from './app.routing.module';
import { ToastDefaults, SnotifyService, SnotifyModule } from 'ng-snotify';
import { SharedModule } from './shared/shared.module';
import { LoggedInTemplateComponent } from './templates/loggedin-template/loggedin-template.component';
import { NotLoggedInTemplateComponent } from './templates/not-loggedin-template/not-loggedin-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './security/auth.service';
import { ToasterService } from './shared/services/toaster.service';
import { AuthGuard } from './security/auth-guard.service';
import { StorageService } from './shared/services/storage.service';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent,
    LoggedInTemplateComponent,
    NotLoggedInTemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgtUniversalModule,
    SharedModule.forRoot(),
    AppRoutingModule,
    SnotifyModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandler },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
    ToasterService,
    AuthService,
    AuthGuard,
    StorageService
  ],
})
export class AppModule { }
