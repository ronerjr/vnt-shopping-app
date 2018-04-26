import { Routes } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';

export const APP_ROUTES: Routes = [
    { path: 'shopping', loadChildren: './shopping/shopping.module#ShoppingModule'},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'shopping', pathMatch: 'full' },
];
