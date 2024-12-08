import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PipesComponent } from './pipes/pipes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: "pipes", component: PipesComponent},
    {path: "login", component: LoginComponent},
    {path: "profile", component: ProfileComponent},
    {path: "dashboard", component: DashboardComponent,
        children: [
            {path: "home", component: HomeComponent}
        ]
    },
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];
