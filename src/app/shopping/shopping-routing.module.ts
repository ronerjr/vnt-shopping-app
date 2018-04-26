import { Routes } from '@angular/router';
import { ShoppingComponent } from './shopping.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from '../auth/auth.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const SHOPPING_ROUTES: Routes = [
    {
        path: 'shopping',
        component: ShoppingComponent,
        children: [
            { path: 'about', component: AboutComponent, canActivate: [AuthService] },
            { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthService] },
            { path: '', redirectTo: 'shopping-list', pathMatch: 'full' },
            { path: '**', component: NotFoundComponent }
        ]
    }
];
