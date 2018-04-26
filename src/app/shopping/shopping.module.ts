import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShoppingComponent } from './shopping.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListOptionsComponent } from './shopping-list/shopping-list-options/shopping-list-options.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SHOPPING_ROUTES } from './shopping-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SHOPPING_ROUTES),
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule
  ],
  declarations: [
    ShoppingComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListOptionsComponent,
    ShoppingFormComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  providers: [
    ShoppingListService
  ],
  entryComponents: [
    ShoppingListOptionsComponent,
  ]
})
export class ShoppingModule { }
