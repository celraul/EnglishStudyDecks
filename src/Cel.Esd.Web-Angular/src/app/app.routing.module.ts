import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { NotFoundPageComponent } from "./pages/not-found-page/not-found-page.component";
import { NotLoggedInTemplateComponent } from "./templates/not-loggedin-template/not-loggedin-template.component";
import { LoggedInTemplateComponent } from "./templates/loggedin-template/loggedin-template.component";
import { AuthGuard } from "./security/auth-guard.service";

export const APP_ROUTES: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // },
    {
        path: '',
        redirectTo: 'phrase-decks',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: NotLoggedInTemplateComponent,
        loadChildren: 'src/app/pages/login/login.module#LoginModule'
    },
    {
        path: 'register',
        component: NotLoggedInTemplateComponent,
        loadChildren: 'src/app/pages/register/register.module#RegisterModule'
    },
    {
        path: 'reset-password',
        component: NotLoggedInTemplateComponent,
        loadChildren: 'src/app/pages/reset-password/reset-password.module#ResetPasswordModule'
    },
    // {
    //     path: 'home',
    //     component: LoggedInTemplateComponent,
    //     loadChildren: 'src/app/pages/home/home.module#HomeModule',
    //     canActivate: [AuthGuard]
    // },
    {
        path: 'profile',
        component: LoggedInTemplateComponent,
        loadChildren: 'src/app/pages/profile/profile.module#ProfileModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'settings',
        component: LoggedInTemplateComponent,
        loadChildren: 'src/app/pages/settings/settings.module#SettingsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'phrase-decks',
        component: LoggedInTemplateComponent,
        loadChildren: 'src/app/pages/phrase-decks/phrase-decks.module#PhraseDecksModule',
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'text-decks',
    //     component: LoggedInTemplateComponent,
    //     loadChildren: 'src/app/pages/text-decks/text-decks.module#TextDecksModule',
    //     canActivate: [AuthGuard]
    // },
    {
        path: '**',
        component: NotLoggedInTemplateComponent,
        children: [{
            path: '',
            component: NotFoundPageComponent,
        }],
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES,
            {
                preloadingStrategy: PreloadAllModules,
                useHash: true
            })
    ],
    declarations: [],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }