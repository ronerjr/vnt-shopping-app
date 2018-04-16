import { Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';

export const APP_ROUTES: Routes = [
    { path: 'about', component: AboutComponent, canActivate: [AuthService] },
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthService] },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/shopping-list', pathMatch: 'full' },
    { path: '**', component: ShoppingListComponent }
];
