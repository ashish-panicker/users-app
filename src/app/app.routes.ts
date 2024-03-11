import { Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ConfirmActionComponent } from './users/delete-confirm/delete-confirm.component';

/**
 * Each route comprises of a path and a component that is mapped for that path.
 * Example:
 * https://angular.io/guide/router
 * My Application URL: http://localhost:4200
 */
export const routes: Routes = [
    // http://localhost:4200/home
    { path: 'home', component: HomeComponent },
    // http://localhost:4200/users/list-all
    // http://localhost:4200/users/list-one/1
    // http://localhost:4200/users/delete
    // http://localhost:4200/users/create
    {
        path: 'users', children: [
            { path: 'list-all', component: ListUsersComponent },
            { path: 'create', component: NewUserComponent },
            { path: ':action/:id', component: ConfirmActionComponent },
        ]
    },
    // http://localhost:4200/add-user
    { path: 'create-user', component: NewUserComponent },
    // http://localhost:4200
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // http://localhost:4200/**
    { path: '**', component: PageNotFoundComponent },
];
