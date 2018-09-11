import { Routes, RouterModule } from '@angular/router';

import { NgModule }             from '@angular/core';
import { Appcomponent } from './app.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    { path: '', component: Appcomponent },
    { path: 'home', component: Appcomponent },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);