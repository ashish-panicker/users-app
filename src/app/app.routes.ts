import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

/**
 * Each route comprises of a path and a component that is mapped for that path.
 * Example:
 * https://angular.io/guide/router
 * My Application URL: http://localhost:4200
 */
export const routes: Routes = [
    // http://localhost:4200/home
    { path: 'home', component: HomeComponent },
    // http://localhost:4200/list-user
    { path: 'list-user', component: ListUsersComponent },
    // http://localhost:4200/add-user
    { path: 'create-user', component: NewUserComponent },
    // http://localhost:4200
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // http://localhost:4200/**
    { path: '**', component: PageNotFoundComponent },
];
